export default function Footer() {
  return (
    <footer>
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-(--text-primary)">Priya Shah</h3>
          <p className="mt-2 max-w-md text-sm leading-7 text-(--text-primary)">
            Frontend Developer focused on performance, reusable UI, and modern web experiences.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-(--text-primary)">
          <a href="#about" className="transition hover:text-(--accent)">
            About
          </a>
          <a href="#projects" className="transition hover:text-(--accent)">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-(--accent)">
            Contact
          </a>
          <a
            href="/assets/Priya_Shah_Resume_2026.pdf"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-(--accent)"
          >
            View CV
          </a>
          <a
            href="https://www.linkedin.com/in/priya-shah-024723144/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-(--accent)"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/piihushah"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-(--accent)"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl border-t border-(--border) pt-6 flex flex-col items-center justify-center gap-1 text-sm text-(--text-primary)">
        <p>© 2026 Priya Shah. All rights reserved.</p>
        <p>Designed and built by Priya Shah. Built with React, Tailwind CSS & Vite</p>
      </div>
    </footer>
  );
}
