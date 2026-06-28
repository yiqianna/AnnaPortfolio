import { education } from "../data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section className="education-sec container" id="education">
      <Reveal>
        <p className="section-label">02 — Education</p>
      </Reveal>
      <Reveal delayIndex={1}>
        <h2 className="section-heading">Coursework Foundations</h2>
      </Reveal>
      <Reveal delayIndex={2}>
        <article className="edu-card">
          <div className="edu-card__head">
            <span className="edu-card__date">{education.date}</span>
            <span className="edu-card__gpa">{education.gpa}</span>
            <span className="edu-card__degree">{education.degree}</span>
          </div>
          <h3 className="edu-card__school">{education.school}</h3>
          <p className="edu-card__summary">{education.summary}</p>
          <div className="edu-card__courses">
            {education.coursework.map((c) => (
              <div className="course-group" key={c.group}>
                <h4>{c.group}</h4>
                <ul>
                  {c.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </Reveal>
    </section>
  );
}
