import { type CSSProperties } from "react";
import { education } from "../data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section className="edu container" id="education">
      <Reveal>
        <p className="section-label">02 — Education</p>
      </Reveal>

      {/* school card */}
      <Reveal delayIndex={1}>
        <div className="edu-school-card">
          <div className="edu-school-card__main">
            <p className="edu-school-card__label">University of Washington, Seattle</p>
            <h2 className="edu-school-card__degree">
              B.S. Informatics &amp; B.S. Applied Mathematics
            </h2>
            <p className="edu-school-card__track">Data Science track · Sep 2023 – Jun 2027</p>
          </div>
          <div className="edu-school-card__stats">
            <div className="edu-stat">
              <span className="edu-stat__val">{education.gpa}</span>
              <span className="edu-stat__label">GPA</span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* coursework cards */}
      <div className="edu-courses-grid">
        {education.coursework.map((group, gi) => (
          <Reveal key={group.group} delayIndex={gi + 2}>
            <div className="edu-course-card">
              <h3 className="edu-course-card__title">{group.group}</h3>
              <p className="edu-course-card__note">{group.note}</p>
              <ol className="edu-course-card__list">
                {group.items.map((item, i) => (
                  <li
                    key={item}
                    className="edu-course-item"
                    style={{ "--i": i } as CSSProperties}
                  >
                    <span className="edu-course-item__idx">{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
