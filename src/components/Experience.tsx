import type { CSSProperties } from "react";
import { experiences, type Experience as ExperienceType } from "../data";
import Reveal from "./Reveal";
import { useReveal } from "../hooks/useReveal";

function ExpItem({ exp, index }: { exp: ExperienceType; index: number }) {
  const { ref, visible } = useReveal<HTMLLIElement>();
  const style = { "--reveal-i": index % 3 } as CSSProperties;
  return (
    <li ref={ref} className={`exp reveal${visible ? " is-visible" : ""}`} style={style}>
      <div className="exp__head">
        <h3 className="exp__role">{exp.role}</h3>
        <span className="exp__date">{exp.date}</span>
      </div>
      <p className="exp__org">{exp.org}</p>
      <ul className="exp__points">
        {exp.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </li>
  );
}

export default function Experience() {
  return (
    <section className="experience container" id="experience">
      <Reveal>
        <p className="section-label">03 — Experience</p>
      </Reveal>
      <ol className="exp-list">
        {experiences.map((exp, i) => (
          <ExpItem key={exp.role} exp={exp} index={i} />
        ))}
      </ol>
    </section>
  );
}
