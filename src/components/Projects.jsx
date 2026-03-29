import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="section">
      <div id="projects" className="container">
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium text-(--text-secondary)">Projects</p>
          <h2 className="text-4xl font-bold text-(--text-primary)">Selected Work</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
