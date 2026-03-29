import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="section">
      <div id="contact" className="container">
        <div className="grid gap-10 rounded-3xl border border-(--border) bg-(--surface) p-8 md:grid-cols-2 md:p-12">
          {/* LEFT */}
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-(--text-primary)">Contact</p>
            <h2 className="text-3xl font-bold md:text-5xl">Let’s build something great together</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-(--text-primary)">
              I’m currently open to Frontend Developer opportunities. Feel free to reach out or connect with me.
            </p>
            <p className="mt-3 text-sm text-(--text-primary)">Based in Perth, WA • Open to opportunities</p>
          </div>

          {/* RIGHT */}
          <div className="grid gap-4">
            <a
              href="mailto:your@email.com"
              className="flex items-center gap-4 rounded-2xl border border-(--border) bg-(--surface) p-5 transition hover:bg-(--surface/40)hover:bg-(--surface/40)"
            >
              <MdEmail className="text-2xl text-(--accent)" />
              <div>
                <p className="text-sm text-(--text-primary)">Email</p>
                <p className="text-(--text-primary) font-medium">priyashah_95@yahoo.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/priya-shah-024723144/"
              target="_blank"
              className="flex items-center gap-4 rounded-2xl border border-(--border) bg-(--surface) p-5 transition hover:bg-(--surface)"
            >
              <FaLinkedin className="text-2xl text-(--accent)" />
              <div>
                <p className="text-sm text-(--text-primary)">LinkedIn</p>
                <p className="text-(--text-primary) font-medium">Connect with me</p>
              </div>
            </a>

            <a
              href="https://github.com/piihushah"
              target="_blank"
              className="flex items-center gap-4 rounded-2xl border border-(--border) bg-(--surface) p-5 transition hover:bg-(--surface/40)"
            >
              <FaGithub className="text-2xl text-(--accent)" />
              <div>
                <p className="text-sm text-(--text-primary)">GitHub</p>
                <p className="text-(--text-primary) font-medium">View projects</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
