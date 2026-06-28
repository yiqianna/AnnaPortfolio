import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section className="hero container">
      <p className="hero__eyebrow">
        Focused on <Typewriter words={["UX/UI design", "data analysis", "software development"]} />
      </p>
      <h1 className="hero__title">
        Designing with empathy,
        <br />
        deciding with <em>data</em>,
        <br />
        building with <em>code</em>.
      </h1>
      <div className="hero__meta">
        <p className="hero__intro">
          I&rsquo;m <strong>Yiqian (Anna) Huang</strong>, working at the intersection of{" "}
          <strong>UX/UI design</strong>, <strong>data analysis</strong>, and{" "}
          <strong>software development</strong> &mdash; with a focus on human-computer interaction
          and data science.
        </p>
        <a className="btn" href="#work">
          View selected work &rarr;
        </a>
      </div>
    </section>
  );
}
