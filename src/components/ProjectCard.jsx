import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const isInternal = project.link?.startsWith("/");

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="mb-2 text-sm text-white/60">{project.subTitle}</p>

      <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>

      <p className="mb-4 text-white/75">{project.description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
            {tech}
          </span>
        ))}
      </div>

      <ul className="mb-6 space-y-2 text-sm text-white/70">
        {project.highlights.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>

      {isInternal ? (
        <Link to={project.link} className="inline-flex rounded-lg bg-indigo-400 px-4 py-2 font-medium text-black">
          View Details
        </Link>
      ) : (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-lg bg-indigo-400 px-4 py-2 font-medium text-black"
        >
          View Project
        </a>
      )}
    </div>
  );
}
