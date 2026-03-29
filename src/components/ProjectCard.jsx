import { Link } from "react-router-dom";
import Badge from "./Base/Badge";
import Button from "./Base/Button";

export default function ProjectCard({ project }) {
  const isInternal = project.link?.startsWith("/");

  return (
    <div className="rounded-2xl border border-(--border) bg-(--background) p-6">
      <p className="mb-2 text-sm text-(--text-secondary)">{project.subTitle}</p>
      <h3 className="mb-3 text-2xl font-semibold text-(--text-primary)">{project.title}</h3>
      <p className="mb-4 text-(--text-secondary)">{project.description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
      <ul className="mb-6 space-y-2 text-sm text-(--text-secondary)">
        {project.highlights.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      {isInternal ? (
        <Link to={project.link} className="inline-block">
          <Button>View Details</Button>
        </Link>
      ) : (
        <Button onClick={() => window.open(project.link, "_blank")}>View Project</Button>
      )}
    </div>
  );
}
