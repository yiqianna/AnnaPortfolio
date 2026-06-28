import { useState } from "react";
import { projects, type Category } from "../data";
import ProjectCard from "./ProjectCard";

type Filter = "all" | Category;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "uiux", label: "UX/UI" },
  { id: "data", label: "Data" },
  { id: "dev", label: "Development" },
];

export default function Work() {
  const [active, setActive] = useState<Filter>("all");
  const shown = projects.filter((p) => active === "all" || p.category === active);

  return (
    <section className="work container" id="work">
      <div className="work__head">
        <p className="section-label">04 — Selected Work</p>
        <div className="filters" role="tablist" aria-label="Filter projects by category">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`filter${active === f.id ? " is-active" : ""}`}
              onClick={() => setActive(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <ul className="projects">
        {shown.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </ul>
    </section>
  );
}
