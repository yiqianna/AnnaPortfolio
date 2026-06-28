import { useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

interface HeaderProps {
  activeId: string;
  scrolled: boolean;
}

export default function Header({ activeId, scrolled }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <nav className="nav container">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
          Anna<span className="dot">.</span>
        </a>
        <button
          className="nav__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
        <ul className={`nav__links${open ? " is-open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeId === item.id ? "is-active" : ""}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
