import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="contact container" id="contact">
      <Reveal>
        <p className="section-label">05 — Contact</p>
      </Reveal>
      <Reveal delayIndex={1}>
        <h2 className="contact__title">Let&rsquo;s build something worth measuring.</h2>
      </Reveal>
      <Reveal delayIndex={2}>
        <p className="contact__emails">
          <a className="contact__email" href="mailto:ahsz10504@gmail.com">
            ahsz10504@gmail.com
          </a>
          <span className="contact__email-sep" aria-hidden="true">
            ·
          </span>
          <a className="contact__email" href="mailto:anna1018@uw.edu">
            anna1018@uw.edu
          </a>
        </p>
        <p className="contact__follow">Follow me</p>
        <ul className="contact__socials">
          <li>
            <a
              className="social-btn"
              href="https://www.linkedin.com/in/yiqian-huang-0752932b9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="social-btn"
              href="https://github.com/yiqianna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.37-1.34-1.74-1.34-1.74-1.09-.73.08-.72.08-.72 1.21.08 1.84 1.22 1.84 1.22 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.31-5.47-5.83 0-1.29.47-2.34 1.24-3.17-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.21.96-.26 1.98-.39 3-.4 1.02.01 2.04.14 3 .4 2.29-1.53 3.3-1.21 3.3-1.21.66 1.65.24 2.87.12 3.17.77.83 1.24 1.88 1.24 3.17 0 4.53-2.81 5.53-5.49 5.82.43.36.81 1.08.81 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.83.56C20.56 21.88 24 17.48 24 12.29 24 5.78 18.63.5 12 .5z" />
              </svg>
            </a>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
