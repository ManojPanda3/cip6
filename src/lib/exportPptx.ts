import PptxGenJS from "pptxgenjs";
import type { SlideDef, Tile, BulletItem, Week } from "../types";

const INK = "0F172A";
const CYAN = "67E8F9";
const PINK = "F9A8D4";
const YELLOW = "FDE047";
const WHITE = "FFFFFF";
const LIME = "D9F99D";

const bgHex = (c: string) =>
  ({ yellow: YELLOW, cyan: CYAN, pink: PINK, white: WHITE, lime: LIME })[c] ||
  WHITE;

// 16:9 wide = 13.333 x 7.5 inches
const W = 13.333;
const H = 7.5;

// Strip basic html to plain text; rough but adequate
function stripHtml(s: string): string {
  return s
    .replace(/<br\s*\/?\s*>/gi, "\n")
    .replace(/<\/?[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .trim();
}

// Convert simple html to pptx text runs
function htmlToRuns(s: string): PptxGenJS.TextProps[] {
  // Split on <strong>, <em>, <code> with very simple parser
  const runs: PptxGenJS.TextProps[] = [];
  const re = /<(\/?)(strong|b|em|i|code)>|([^<]+)/gi;
  let bold = false,
    italic = false,
    mono = false;
  let m;
  while ((m = re.exec(s))) {
    if (m[3]) {
      const text = m[3]
        .replace(/<br\s*\/?\s*>/gi, "\n")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&nbsp;/g, " ");
      if (text.length) {
        runs.push({
          text,
          options: {
            bold: bold || undefined,
            italic: italic || undefined,
            fontFace: mono ? "Consolas" : undefined,
          },
        });
      }
    } else {
      const closing = m[1] === "/";
      const tag = m[2].toLowerCase();
      if (tag === "strong" || tag === "b") bold = !closing;
      else if (tag === "em" || tag === "i") italic = !closing;
      else if (tag === "code") mono = !closing;
    }
  }
  if (runs.length === 0) runs.push({ text: stripHtml(s) });
  return runs;
}

async function fetchImageData(src: string): Promise<string | null> {
  try {
    const abs = new URL(src, window.location.href).toString();
    const res = await fetch(abs, { mode: "cors" });
    if (!res.ok) return null;
    const blob = await res.blob();
    return await new Promise((resolve) => {
      const r = new FileReader();
      r.onloadend = () => resolve(typeof r.result === "string" ? r.result : null);
      r.onerror = () => resolve(null);
      r.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

// Slide-level renderers
function renderTitle(
  pptx: PptxGenJS,
  slide: PptxGenJS.Slide,
  data: Extract<SlideDef["layout"], { kind: "title" }>,
) {
  slide.background = { color: CYAN };
  // yellow title card
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.8,
    y: 1.3,
    w: W - 1.6,
    h: H - 2.6,
    fill: { color: YELLOW },
    line: { color: INK, width: 4 },
    rectRadius: 0.4,
  });
  if (data.accent) {
    slide.addText(data.accent, {
      x: 0.8,
      y: 1.6,
      w: W - 1.6,
      h: 0.6,
      fontFace: "Fredoka",
      fontSize: 20,
      color: CYAN,
      fill: { color: INK },
      align: "center",
      bold: true,
    });
  }
  slide.addText(htmlToRuns(data.title), {
    x: 0.8,
    y: 2.4,
    w: W - 1.6,
    h: 2.4,
    fontFace: "Fredoka",
    fontSize: 54,
    color: INK,
    align: "center",
    bold: true,
    valign: "middle",
  });
  if (data.subtitle) {
    slide.addText(data.subtitle, {
      x: 0.8,
      y: 4.8,
      w: W - 1.6,
      h: 0.6,
      fontFace: "Quicksand",
      fontSize: 20,
      color: INK,
      align: "center",
      bold: true,
    });
  }
}

function renderSectionTitle(
  pptx: PptxGenJS,
  slide: PptxGenJS.Slide,
  data: Extract<SlideDef["layout"], { kind: "sectionTitle" }>,
) {
  slide.background = { color: WHITE };
  slide.addShape(pptx.ShapeType.roundRect, {
    x: W / 2 - 2,
    y: 1.8,
    w: 4,
    h: 0.9,
    fill: { color: bgHex(data.badgeColor || "pink") },
    line: { color: INK, width: 4 },
    rectRadius: 0.4,
  });
  slide.addText(data.badge, {
    x: W / 2 - 2,
    y: 1.8,
    w: 4,
    h: 0.9,
    fontFace: "Fredoka",
    fontSize: 26,
    color: INK,
    align: "center",
    bold: true,
    valign: "middle",
  });
  slide.addText(data.title, {
    x: 0.5,
    y: 3,
    w: W - 1,
    h: 1.5,
    fontFace: "Fredoka",
    fontSize: 60,
    color: INK,
    align: "center",
    bold: true,
  });
  if (data.subtitle) {
    slide.addText(data.subtitle, {
      x: 0.5,
      y: 4.6,
      w: W - 1,
      h: 0.6,
      fontFace: "Quicksand",
      fontSize: 22,
      color: INK,
      align: "center",
      bold: true,
    });
  }
}

function drawTitleBar(
  _pptx: PptxGenJS,
  slide: PptxGenJS.Slide,
  title: string,
) {
  slide.addText(title, {
    x: 0.6,
    y: 0.4,
    w: W - 1.2,
    h: 0.9,
    fontFace: "Fredoka",
    fontSize: 38,
    color: INK,
    bold: true,
  });
  slide.addShape(_pptx.ShapeType.rect, {
    x: 0.6,
    y: 1.3,
    w: 3,
    h: 0.08,
    fill: { color: YELLOW },
    line: { color: YELLOW },
  });
}

function renderTiles(
  pptx: PptxGenJS,
  slide: PptxGenJS.Slide,
  data: Extract<SlideDef["layout"], { kind: "tiles" }>,
) {
  slide.background = { color: WHITE };
  drawTitleBar(pptx, slide, data.title);

  const tiles = data.tiles;
  const gap = 0.3;
  const top = 1.9;
  const totalW = W - 1.2;
  const tileW = (totalW - gap * (tiles.length - 1)) / tiles.length;
  const tileH = H - top - 0.5;

  tiles.forEach((t: Tile, i) => {
    const x = 0.6 + i * (tileW + gap);
    slide.addShape(pptx.ShapeType.roundRect, {
      x,
      y: top,
      w: tileW,
      h: tileH,
      fill: { color: bgHex(t.bg) },
      line: { color: INK, width: 3 },
      rectRadius: 0.25,
    });
    slide.addText(t.title, {
      x: x + 0.3,
      y: top + 0.8,
      w: tileW - 0.6,
      h: 0.7,
      fontFace: "Fredoka",
      fontSize: 22,
      color: INK,
      bold: true,
    });
    slide.addText(htmlToRuns(t.body), {
      x: x + 0.3,
      y: top + 1.6,
      w: tileW - 0.6,
      h: 2.5,
      fontFace: "Quicksand",
      fontSize: 15,
      color: INK,
      valign: "top",
    });
    if (t.code) {
      slide.addShape(pptx.ShapeType.roundRect, {
        x: x + 0.3,
        y: top + tileH - 1.6,
        w: tileW - 0.6,
        h: 1.3,
        fill: { color: "1E293B" },
        line: { color: INK, width: 2 },
        rectRadius: 0.12,
      });
      slide.addText(t.code, {
        x: x + 0.4,
        y: top + tileH - 1.55,
        w: tileW - 0.8,
        h: 1.2,
        fontFace: "Consolas",
        fontSize: 12,
        color: "F8FAFC",
        valign: "top",
      });
    }
  });
}

async function renderTwoColumnBullets(
  pptx: PptxGenJS,
  slide: PptxGenJS.Slide,
  data: Extract<SlideDef["layout"], { kind: "twoColumnBullets" }>,
) {
  slide.background = { color: WHITE };
  drawTitleBar(pptx, slide, data.title);

  const colW = (W - 1.4) / 2;
  const top = 1.9;
  const bulletsLeft = data.imageLeft ? 0.7 + colW + 0.2 : 0.6;
  const imageLeft = data.imageLeft ? 0.6 : 0.7 + colW + 0.2;
  const colH = H - top - 0.5;

  if (data.heading) {
    slide.addText(data.heading, {
      x: bulletsLeft,
      y: top,
      w: colW,
      h: 0.6,
      fontFace: "Fredoka",
      fontSize: 26,
      color: INK,
      bold: true,
    });
  }
  const bulletTop = top + (data.heading ? 0.8 : 0.2);
  data.bullets.forEach((b: BulletItem, i) => {
    const y = bulletTop + i * 0.7;
    slide.addShape(pptx.ShapeType.ellipse, {
      x: bulletsLeft,
      y,
      w: 0.5,
      h: 0.5,
      fill: { color: bgHex(b.color) },
      line: { color: INK, width: 2 },
    });
    slide.addText(htmlToRuns(b.html), {
      x: bulletsLeft + 0.7,
      y,
      w: colW - 0.7,
      h: 0.6,
      fontFace: "Quicksand",
      fontSize: 16,
      color: INK,
      valign: "middle",
    });
  });

  if (data.image) {
    const imgData = await fetchImageData(data.image.src);
    if (imgData) {
      if (data.image.round) {
        slide.addImage({
          data: imgData,
          x: imageLeft + colW / 2 - colH / 2,
          y: top,
          w: colH,
          h: colH,
          rounding: true,
        });
      } else {
        slide.addImage({
          data: imgData,
          x: imageLeft,
          y: top,
          w: colW,
          h: colH,
        });
      }
    } else {
      slide.addShape(pptx.ShapeType.roundRect, {
        x: imageLeft,
        y: top,
        w: colW,
        h: colH,
        fill: { color: "F1F5F9" },
        line: { color: INK, width: 3 },
        rectRadius: data.image.round ? colH / 2 : 0.25,
      });
      slide.addText("Image", {
        x: imageLeft,
        y: top + colH / 2 - 0.3,
        w: colW,
        h: 0.6,
        fontFace: "Fredoka",
        fontSize: 20,
        color: INK,
        align: "center",
      });
    }
  }
}

async function renderBleed(
  pptx: PptxGenJS,
  slide: PptxGenJS.Slide,
  data: Extract<SlideDef["layout"], { kind: "bleedImage" }>,
) {
  slide.background = { color: bgHex(data.bg) };
  const halfW = W / 2;
  // content side
  slide.addText(htmlToRuns(data.title), {
    x: 0.6,
    y: 0.6,
    w: halfW - 1,
    h: 1.8,
    fontFace: "Fredoka",
    fontSize: 44,
    color: INK,
    bold: true,
  });
  let y = 2.6;
  if (data.subheading) {
    slide.addText(data.subheading, {
      x: 0.6,
      y,
      w: halfW - 1,
      h: 0.6,
      fontFace: "Fredoka",
      fontSize: 26,
      color: INK,
      bold: true,
    });
    y += 0.7;
  }
  data.paragraphs.forEach((p) => {
    slide.addText(htmlToRuns(p), {
      x: 0.6,
      y,
      w: halfW - 1,
      h: 0.9,
      fontFace: "Quicksand",
      fontSize: 16,
      color: INK,
    });
    y += 0.9;
  });
  // image side
  const imgData = await fetchImageData(data.image.src);
  if (imgData) {
    slide.addImage({
      data: imgData,
      x: halfW,
      y: 0,
      w: halfW,
      h: H,
    });
  } else {
    slide.addShape(pptx.ShapeType.rect, {
      x: halfW,
      y: 0,
      w: halfW,
      h: H,
      fill: { color: INK },
      line: { color: INK },
    });
    slide.addText(data.image.alt || "Image", {
      x: halfW,
      y: H / 2 - 0.4,
      w: halfW,
      h: 0.8,
      fontFace: "Fredoka",
      fontSize: 22,
      color: WHITE,
      align: "center",
    });
  }
}

function renderQA(
  pptx: PptxGenJS,
  slide: PptxGenJS.Slide,
  data: Extract<SlideDef["layout"], { kind: "qa" }>,
) {
  slide.background = { color: WHITE };
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.8,
    y: 0.8,
    w: W - 1.6,
    h: H - 1.6,
    fill: { color: PINK },
    line: { color: INK, width: 5 },
    rectRadius: 0.4,
  });
  slide.addText(data.title, {
    x: 1,
    y: 1.2,
    w: W - 2,
    h: 1.2,
    fontFace: "Fredoka",
    fontSize: 48,
    color: INK,
    bold: true,
    align: "center",
  });
  slide.addText(data.body, {
    x: 1,
    y: 2.5,
    w: W - 2,
    h: 0.8,
    fontFace: "Quicksand",
    fontSize: 22,
    color: INK,
    align: "center",
    bold: true,
  });
  if (data.note) {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 1.5,
      y: 3.6,
      w: W - 3,
      h: 1.3,
      fill: { color: WHITE },
      line: { color: INK, width: 3 },
      rectRadius: 0.25,
    });
    slide.addText(data.note, {
      x: 1.7,
      y: 3.7,
      w: W - 3.4,
      h: 1.1,
      fontFace: "Quicksand",
      fontSize: 16,
      color: INK,
      bold: true,
      align: "center",
      valign: "middle",
    });
  }
  if (data.contact) {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 1.5,
      y: 5.2,
      w: W - 3,
      h: 0.9,
      fill: { color: INK },
      line: { color: INK },
      rectRadius: 0.2,
    });
    slide.addText(data.contact, {
      x: 1.5,
      y: 5.2,
      w: W - 3,
      h: 0.9,
      fontFace: "Quicksand",
      fontSize: 18,
      color: YELLOW,
      bold: true,
      align: "center",
      valign: "middle",
    });
  }
}

export async function exportWeekToPptx(
  week: Week,
  onProgress?: (current: number, total: number) => void,
): Promise<void> {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  pptx.title = week.title;
  pptx.author = week.author;
  pptx.company = "Code in Place 2026";
  pptx.subject = week.subtitle;

  for (let i = 0; i < week.slides.length; i++) {
    const s = week.slides[i];
    const ps = pptx.addSlide();
    switch (s.layout.kind) {
      case "title":
        renderTitle(pptx, ps, s.layout);
        break;
      case "sectionTitle":
        renderSectionTitle(pptx, ps, s.layout);
        break;
      case "tiles":
        renderTiles(pptx, ps, s.layout);
        break;
      case "twoColumnBullets":
        await renderTwoColumnBullets(pptx, ps, s.layout);
        break;
      case "bleedImage":
        await renderBleed(pptx, ps, s.layout);
        break;
      case "qa":
        renderQA(pptx, ps, s.layout);
        break;
    }
    onProgress?.(i + 1, week.slides.length);
  }

  await pptx.writeFile({ fileName: `code-in-place-${week.slug}.pptx` });
}
