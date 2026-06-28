import type { CSSProperties } from "react";
import { skills } from "../data";
import Reveal from "./Reveal";
import { useReveal } from "../hooks/useReveal";

function SkillGroup({ group, items, index }: { group: string; items: string[]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const style = { "--reveal-i": index } as CSSProperties;
  return (
    <div ref={ref} className={`skill-group reveal${visible ? " is-visible" : ""}`} style={style}>
      <h3>{group}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <section className="about container" id="about">
      <Reveal>
        <p className="section-label">01 — About</p>
      </Reveal>
      <div className="about__grid">
        <Reveal className="about__bio">
          <h2 className="about__lead">
            I turn messy problems into clear, usable, and measurable products.
          </h2>
          <p>
            I&rsquo;m an undergraduate at the <strong>University of Washington</strong>, pursuing a
            double degree in <strong>Informatics</strong> and{" "}
            <strong>Applied Mathematics (Data Science track)</strong>. I work across UX
            design, data analysis, and full-stack development &mdash; and love projects where all
            three meet.
          </p>
          <p className="about__location">
            Based in <strong>Seattle, WA</strong> &amp; the <strong>Greater Bay Area</strong> · Open
            to opportunities
          </p>
        </Reveal>
        <div className="about__skills">
          {skills.map((s, i) => (
            <SkillGroup key={s.group} group={s.group} items={s.items} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
