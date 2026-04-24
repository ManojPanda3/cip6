import { Link } from "react-router-dom";
import { weeks } from "../data/weeks";

const TOTAL_WEEKS = 6;

export function Lessons() {
  return (
    <div className="home">
      <header className="home-header">
        <div>
          <div className="home-badge">CODE IN PLACE 2026</div>
          <h1 className="home-title fredoka">Lessons</h1>
          <p className="home-sub">
            Pick a week to view the section deck. Swipe or use arrow keys once
            inside.
          </p>
        </div>
        <a
          className="mini-btn pink"
          href="https://codeinplace.stanford.edu"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-link"></i> CIP site
        </a>
      </header>

      <div className="lesson-grid">
        {Array.from({ length: TOTAL_WEEKS }, (_, i) => i + 1).map((n) => {
          const week = weeks.find((w) => w.number === n);
          if (week) {
            return (
              <Link
                key={n}
                to={`/week/${week.number}`}
                className="lesson-card"
                aria-label={`Open week ${n}`}
              >
                <span className="lesson-num">Week {n}</span>
                <h3>{week.title}</h3>
                <p>{week.subtitle}</p>
                <div className="count">
                  {week.slides.length} slides · by {week.author}
                </div>
              </Link>
            );
          }
          return (
            <div key={n} className="lesson-card locked">
              <span
                className="lesson-num"
                style={{ background: "var(--white)" }}
              >
                Week {n}
              </span>
              <h3>Coming soon</h3>
              <p>Content not published yet.</p>
              <div className="count">
                <i className="fa-solid fa-lock"></i> locked
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
