import type { SlideDef } from "../types";

interface Props {
  slide: SlideDef;
  active: boolean;
}

const html = (s: string) => ({ __html: s });

export function Slide({ slide, active }: Props) {
  const l = slide.layout;
  return (
    <div
      className={`slide${active ? " active" : ""}${
        l.kind === "bleedImage" ? " bleed" : ""
      }`}
      data-title={slide.title}
      id={slide.id}
      style={l.kind === "bleedImage" ? { background: bg(l.bg) } : undefined}
    >
      {l.kind === "title" && (
        <div className="title-layout anim-pop">
          {l.accent && (
            <div className="accent-text anim-up d-1">{l.accent}</div>
          )}
          <h1 className="anim-up d-2" dangerouslySetInnerHTML={html(l.title)} />
          {l.subtitle && (
            <p className="subtitle anim-up d-3">{l.subtitle}</p>
          )}
        </div>
      )}

      {l.kind === "sectionTitle" && (
        <div className="section-title">
          <div
            className="badge anim-pop"
            style={{ background: bg(l.badgeColor || "pink") }}
          >
            {l.badge}
          </div>
          <h1 className="anim-up d-1">{l.title}</h1>
          {l.subtitle && <p className="subtitle anim-up d-2">{l.subtitle}</p>}
        </div>
      )}

      {l.kind === "tiles" && (
        <>
          <h2 className="slide-title anim-right">{l.title}</h2>
          <div className="content-area">
            <div className="tiles">
              {l.tiles.map((t, i) => (
                <div
                  key={i}
                  className={`tile bg-${t.bg} anim-up d-${i + 1}`}
                >
                  <div className="icon">
                    <i className={t.icon}></i>
                  </div>
                  <h3>{t.title}</h3>
                  <p dangerouslySetInnerHTML={html(t.body)} />
                  {t.code && <div className="code-block">{t.code}</div>}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {l.kind === "twoColumnBullets" && (
        <>
          <h2 className="slide-title anim-right">{l.title}</h2>
          <div className="content-area">
            <div className="two-column">
              {l.imageLeft ? (
                <>
                  <ImageCol image={l.image} />
                  <BulletsCol heading={l.heading} bullets={l.bullets} />
                </>
              ) : (
                <>
                  <BulletsCol heading={l.heading} bullets={l.bullets} />
                  <ImageCol image={l.image} />
                </>
              )}
            </div>
          </div>
        </>
      )}

      {l.kind === "bleedImage" && (
        <>
          <div className="content-box">
            <h2
              className="slide-title anim-right"
              dangerouslySetInnerHTML={html(l.title)}
            />
            {l.subheading && <h3 className="anim-up d-1">{l.subheading}</h3>}
            {l.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`anim-up d-${i + 2}`}
                dangerouslySetInnerHTML={html(p)}
              />
            ))}
          </div>
          <div className="image-box anim-right d-2">
            <img src={l.image.src} alt={l.image.alt || ""} />
          </div>
        </>
      )}

      {l.kind === "qa" && (
        <div className="qa anim-pop">
          <h1 className="anim-up d-1" style={{ fontSize: 60 }}>
            {l.title}
          </h1>
          <p className="anim-up d-2" style={{ fontSize: 26, marginTop: 12 }}>
            {l.body}
          </p>
          {l.note && (
            <p className="note anim-up d-3">
              <span dangerouslySetInnerHTML={html(l.note)} />
            </p>
          )}
          {l.contact && <div className="contact anim-up d-4">{l.contact}</div>}
        </div>
      )}
    </div>
  );
}

function BulletsCol({
  heading,
  bullets,
}: {
  heading?: string;
  bullets: import("../types").BulletItem[];
}) {
  return (
    <div>
      {heading && <h3 className="anim-up d-1">{heading}</h3>}
      <ul className="bullet-list">
        {bullets.map((b, i) => (
          <li
            key={i}
            className={`color-${b.color} anim-up d-${Math.min(i + 1, 5)}`}
          >
            <i className={b.icon}></i>
            <span dangerouslySetInnerHTML={html(b.html)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ImageCol({
  image,
}: {
  image?: { src: string; round?: boolean; alt?: string };
}) {
  if (!image) return <div />;
  return (
    <div>
      <div className={`image-wrapper${image.round ? " round" : ""} anim-pop d-3`}>
        <img src={image.src} alt={image.alt || ""} />
      </div>
    </div>
  );
}

function bg(c: string) {
  const map: Record<string, string> = {
    yellow: "#FDE047",
    cyan: "#67E8F9",
    pink: "#F9A8D4",
    white: "#FFFFFF",
  };
  return map[c] || "#FFFFFF";
}
