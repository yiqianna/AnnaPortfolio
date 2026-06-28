import { useRef, type CSSProperties, type MouseEvent as ReactMouseEvent } from "react";
import type { Project } from "../data";
import { useReveal, prefersReducedMotion } from "../hooks/useReveal";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, visible } = useReveal<HTMLLIElement>();
  const mediaRef = useRef<HTMLAnchorElement>(null);
  const style = { "--reveal-i": index % 4 } as CSSProperties;

  const handleMove = (e: ReactMouseEvent) => {
    if (prefersReducedMotion) return;
    const el = mediaRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rotateX = (0.5 - py) * 9;
    const rotateY = (px - 0.5) * 13;
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const handleEnter = () => {
    if (!prefersReducedMotion) mediaRef.current?.classList.add("is-tilting");
  };

  const handleLeave = () => {
    const el = mediaRef.current;
    if (!el) return;
    el.classList.remove("is-tilting");
    el.style.transform = "";
  };

  return (
    <li
      ref={ref}
      className={`project reveal${visible ? " is-visible" : ""}`}
      data-category={project.category}
      style={style}
    >
      <div className="project__body">
        <span className="project__tag">{project.tag}</span>
        <h3 className="project__title">{project.title}</h3>
        <ul className="project__contrib">
          {project.contributions.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <p className="project__role">{project.role}</p>
        <div className="project__links">
          {project.links.map((link) => (
            <a
              key={link.href}
              className={`project__link${link.primary ? "" : " project__link--alt"}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <a
        ref={mediaRef}
        className="project__media project__media--img"
        href={project.links[0].href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title}`}
        onMouseMove={handleMove}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <img src={project.image} alt={project.alt} loading="lazy" />
        <span className="tilt-glare" aria-hidden="true" />
      </a>
    </li>
  );
}
