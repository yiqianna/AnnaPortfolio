import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../hooks/useReveal";

interface TypewriterProps {
  words: string[];
}

export default function Typewriter({ words }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(prefersReducedMotion ? words[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const current = words[index % words.length];

    let delay = deleting ? 45 : 90;
    if (!deleting && text === current) delay = 1500;
    if (deleting && text === "") delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span className="type">
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
