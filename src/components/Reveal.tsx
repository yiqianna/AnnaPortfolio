import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  className?: string;
  delayIndex?: number;
  children: ReactNode;
}

export default function Reveal({ className = "", delayIndex = 0, children }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const style = { "--reveal-i": delayIndex } as CSSProperties;
  return (
    <div
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${className ? " " + className : ""}`}
      style={style}
    >
      {children}
    </div>
  );
}
