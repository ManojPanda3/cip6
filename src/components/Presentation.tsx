import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import type { Week } from "../types";
import { Slide } from "./Slide";
import { exportWeekToPptx } from "../lib/exportPptx";

const SLIDE_W = 1280;
const SLIDE_H = 720;
const MIN_ZOOM = 0.18;
const MAX_ZOOM = 2.4;

type BoardTransform = {
  x: number;
  y: number;
  scale: number;
};

interface Props {
  week: Week;
  initialSlider?: number;
}

export function Presentation({ week, initialSlider }: Props) {
  const slides = week.slides;
  const total = slides.length;
  const [searchParams, setSearchParams] = useSearchParams();
  const sliderParam = searchParams.get("slider");
  const urlSlider = sliderParam ? parseInt(sliderParam, 10) : null;
  const validSlider = urlSlider !== null && urlSlider >= 1 && urlSlider <= total ? urlSlider - 1 : null;
  const [idx, setIdx] = useState(validSlider ?? initialSlider ?? 0);

  const [presenting, setPresenting] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const [status, setStatus] = useState("Ready.");
  const [exporting, setExporting] = useState(false);
  const [board, setBoard] = useState<BoardTransform>({ x: 0, y: 0, scale: 1 });
  const stageRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const dragStart = useRef<{ x: number; y: number; bx: number; by: number } | null>(null);
  const pinchStart = useRef<{ distance: number; scale: number } | null>(null);
  const moved = useRef(false);

  const defaultBoard = useCallback((): BoardTransform => {
    const mobile = window.innerWidth <= 820;
    const paddingX = presenting ? 0 : mobile ? 24 : 80;
    const paddingY = presenting ? 0 : mobile ? 250 : 240;
    const fit = Math.min(
      (window.innerWidth - paddingX) / SLIDE_W,
      (window.innerHeight - paddingY) / SLIDE_H,
    );
    const scale = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, fit * (presenting ? 1 : 0.96)));
    return { x: 0, y: 0, scale };
  }, [presenting]);

  const resetBoard = useCallback(() => {
    setBoard(defaultBoard());
  }, [defaultBoard]);

  const go = useCallback(
    (i: number) => {
      if (i < 0 || i >= total) return;
      setIdx(i);
      const newSlider = i + 1;
      const current = searchParams.get("slider");
      if (String(newSlider) !== current) {
        setSearchParams({ slider: String(newSlider) }, { replace: true });
      }
    },
    [total, searchParams, setSearchParams],
  );
  const next = useCallback(
    () => {
      const newIdx = Math.min(total - 1, idx + 1);
      setIdx(newIdx);
      const newSlider = newIdx + 1;
      const current = searchParams.get("slider");
      if (String(newSlider) !== current) {
        setSearchParams({ slider: String(newSlider) }, { replace: true });
      }
    },
    [total, idx, searchParams, setSearchParams],
  );
  const prev = useCallback(() => {
    const newIdx = Math.max(0, idx - 1);
    setIdx(newIdx);
    const newSlider = newIdx + 1;
    const current = searchParams.get("slider");
    if (String(newSlider) !== current) {
      setSearchParams({ slider: String(newSlider) }, { replace: true });
    }
  }, [idx, searchParams, setSearchParams]);

  // Fit the fixed 16:9 PPT stage into the current viewport.
  useEffect(() => {
    resetBoard();
    window.addEventListener("resize", resetBoard);
    return () => window.removeEventListener("resize", resetBoard);
  }, [resetBoard]);

  // Keyboard
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const k = e.key.toLowerCase();
      if (k === "arrowright" || k === " " || k === "pagedown") {
        e.preventDefault();
        next();
      } else if (k === "arrowleft" || k === "pageup") {
        e.preventDefault();
        prev();
      } else if (k === "f") togglePresent();
      else if (k === "o") setSidebarOpen((x) => !x);
      else if (k === "a") setAutoplay((x) => !x);
      else if (k === "escape") {
        setSidebarOpen(false);
        if (document.fullscreenElement) document.exitFullscreen();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    const id = window.setInterval(() => {
      setIdx((i) => (i < total - 1 ? i + 1 : i));
    }, 5000);
    setStatus("Autoplay on.");
    return () => {
      window.clearInterval(id);
      setStatus("Autoplay off.");
    };
  }, [autoplay, total]);

  // Fullscreen sync
  useEffect(() => {
    function onFs() {
      setPresenting(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  function togglePresent() {
    const el = appRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.().catch(() => setPresenting(true));
      setPresenting(true);
    } else {
      document.exitFullscreen?.();
      setPresenting(false);
    }
  }

  async function doExport() {
    setExporting(true);
    setStatus("Building PPTX...");
    try {
      await exportWeekToPptx(week, (c, t) =>
        setStatus(`Rendered slide ${c}/${t}`),
      );
      setStatus("PPTX downloaded.");
    } catch (err) {
      console.error(err);
      setStatus("Export failed. Check console.");
    } finally {
      setExporting(false);
    }
  }

  function onPointerDown(e: React.PointerEvent) {
    if ((e.target as HTMLElement).closest("button, a, input")) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    moved.current = false;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

    if (pointers.current.size === 1) {
      dragStart.current = { x: e.clientX, y: e.clientY, bx: board.x, by: board.y };
      pinchStart.current = null;
    } else if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinchStart.current = { distance: distance(a, b), scale: board.scale };
      dragStart.current = null;
    }
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 2 && pinchStart.current) {
      const [a, b] = [...pointers.current.values()];
      const nextScale = clamp(
        (pinchStart.current.scale * distance(a, b)) / pinchStart.current.distance,
        MIN_ZOOM,
        MAX_ZOOM,
      );
      moved.current = true;
      setBoard((v) => ({ ...v, scale: nextScale }));
      return;
    }

    if (!dragStart.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved.current = true;
    setBoard((v) => ({ ...v, x: dragStart.current!.bx + dx, y: dragStart.current!.by + dy }));
  }

  function onPointerUp(e: React.PointerEvent) {
    pointers.current.delete(e.pointerId);
    dragStart.current = { x: 0, y: 0, bx: 0, by: 0 };
    pinchStart.current = null;

    if (pointers.current.size === 1) {
      const [p] = [...pointers.current.values()];
      dragStart.current = { x: p.x, y: p.y, bx: board.x, by: board.y };
    }
  }

  function onWheel(e: React.WheelEvent) {
    e.preventDefault();
    const factor = e.deltaY > 0 ? 0.9 : 1.1;
    setBoard((v) => ({ ...v, scale: clamp(v.scale * factor, MIN_ZOOM, MAX_ZOOM) }));
  }

  // Tap on edges (web) for touch devices already via swipe; also support tap-to-advance outside slide
  function onBgClick(e: React.MouseEvent) {
    if (moved.current) {
      moved.current = false;
      return;
    }
    if (!presenting) return;
    const tag = (e.target as HTMLElement).tagName;
    if (["BUTTON", "A", "INPUT"].includes(tag)) return;
    if (e.clientX > window.innerWidth / 2) next();
    else prev();
  }

  const current = slides[idx];

  return (
    <div
      ref={appRef}
      className={`presentation${presenting ? " presenting" : ""}`}
      onClick={onBgClick}
      onWheel={onWheel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >

      <Link to="/" className="mini-btn ghost back-link">
        <i className="fa-solid fa-arrow-left"></i> Lessons
      </Link>
      <div className="hud-top">
        <div className="hud-card">
          <div className="hud-label">Now Showing</div>
          <div className="hud-title">{current.title}</div>
          <div className="hud-sub">
            {current.section} · Slide {idx + 1} of {total}
          </div>
        </div>
      </div>

      <div
        className="stage"
        ref={stageRef}
        style={{
          transform: `translate(${board.x}px, ${board.y}px) scale(${board.scale})`,
        }}
      >
        {slides.map((s, i) => (
          <Slide key={s.id} slide={s} active={i === idx} />
        ))}
      </div>

      <div className="status-pill">{status}</div>

      <div className="controls" onClick={(e) => e.stopPropagation()}>
        <button
          aria-label="Prev"
          disabled={idx === 0}
          onClick={prev}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="counter">
          {idx + 1} / {total}
        </div>
        <button
          aria-label="Next"
          disabled={idx === total - 1}
          onClick={next}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        <button
          id="btnOverview"
          className="wide"
          onClick={() => setSidebarOpen(true)}
        >
          <i className="fa-solid fa-list"></i>
          <span className="label">Overview</span>
        </button>
        <button
          id="btnAuto"
          className="wide"
          onClick={() => setAutoplay((x) => !x)}
        >
          <i className={`fa-solid ${autoplay ? "fa-pause" : "fa-play"}`}></i>
          <span className="label">{autoplay ? "Pause" : "Auto"}</span>
        </button>
        <button id="btnPresent" className="wide" onClick={togglePresent}>
          <i
            className={`fa-solid ${presenting ? "fa-compress" : "fa-expand"}`}
          ></i>
          <span className="label">{presenting ? "Exit" : "Present"}</span>
        </button>
        <button id="btnReset" className="wide" onClick={resetBoard}>
          <i className="fa-solid fa-crosshairs"></i>
          <span className="label">Reset</span>
        </button>
        <button
          id="btnExport"
          className="wide"
          disabled={exporting}
          onClick={doExport}
        >
          <i
            className={`fa-solid ${exporting ? "fa-spinner fa-spin" : "fa-file-powerpoint"}`}
          ></i>
          <span className="label">PPTX</span>
        </button>
      </div>

      {sidebarOpen && (
        <div
          className="backdrop"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <aside
        className={`sidebar${sidebarOpen ? " open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sidebar-head">
          <h2>Jump Around</h2>
          <button
            className="mini-btn ghost"
            onClick={() => setSidebarOpen(false)}
          >
            Close
          </button>
        </div>
        <div className="sidebar-list">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`sidebar-item${i === idx ? " active" : ""}`}
              onClick={() => {
                go(i);
                setSidebarOpen(false);
              }}
            >
              <strong>
                {i + 1}. {s.title}
              </strong>
              <span>{s.section}</span>
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}
