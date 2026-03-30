import Badge from "./Base/Badge";

function About() {
  return (
    <div className="section">
      <div className="container flex flex-col md:flex-row gap-0 items-center">
        <div className="flex-1">
          <h2 className="smd:text-xl font-semibold text-(--text-secondary)">About Me</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-(--text-primary) mb-4">
            Frontend Developer focused on <br />
            <span className="italic">performance & scalable UI</span>
          </h3>
          <div className="mt-2.5 md:text-lg md:max-w-xl leading-7">
            <p>
              I'm a Frontend Developer with 4+ years of experience building scalable, high-performance websites and
              reusable UI systems.
            </p>
            <p>
              I enjoy turning complex requirements into simple, user-friendly interfaces, with a strong focus on
              performance, SEO, and clean architecture.
            </p>
            <p>
              I've worked on 25+ production websites and contributed to building reusable component systems to improve
              development efficiency.
            </p>
            <p>
              Currently, I'm exploring new opportunities where I can continue building impactful frontend experiences.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="space-y-6 md:max-w-2xl">
            {/* Frontend Stack */}
            <div>
              <h4 className="text-xl font-semibold text-(--text-primary) mb-3">Frontend Stack</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>Astro</Badge>
                <Badge>JavaScript (ES6+)</Badge>
                <Badge>HTML5 & CSS3</Badge>
                <Badge>Tailwind CSS</Badge>
              </div>
            </div>

            {/* Design & UI */}
            <div>
              <h4 className="text-xl font-semibold text-(--text-primary) mb-3">Design & UI</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Figma</Badge>
                <Badge>Responsive Design</Badge>
                <Badge>Component Architecture</Badge>
                <Badge>Accessibility Basics</Badge>
              </div>
            </div>

            {/* Performance & SEO */}
            <div>
              <h4 className="text-xl font-semibold text-(--text-primary) mb-3">Performance & SEO</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Page Speed Optimization</Badge>
                <Badge>Lazy Loading</Badge>
                <Badge>Scalable Structure</Badge>
              </div>
            </div>

            {/* Workflow & Tools */}
            <div>
              <h4 className="text-xl font-semibold text-(--text-primary) mb-3">Workflow & Tools</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>GitHub</Badge>
                <Badge>Jira</Badge>
                <Badge>Agile / Scrum</Badge>
                <Badge>Vercel</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
