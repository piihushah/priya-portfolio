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
              I’m a Frontend Developer with 4+ years of experience building high-performance, SEO-optimised websites,
              landing pages, and reusable UI components.
            </p>
            <p>
              I specialise in React, Astro, Tailwind CSS, and JavaScript, focusing on scalable architecture, clean code,
              and performance improvements.
            </p>
            <p>
              I work closely with Figma designs to create responsive, accessible interfaces and continuously improve
              page speed and Lighthouse scores.
            </p>
            <p>I’m currently looking for an opportunity to grow and contribute to a collaborative frontend team.</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="space-y-6 md:max-w-2xl">
            {/* Core Strengths */}
            <div>
              <h4 className="text-xl font-semibold text-(--text-primary) mb-3">Core Strengths</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Reusable Components</Badge>
                <Badge>Performance Optimization</Badge>
                <Badge>SEO-Friendly Development</Badge>
                <Badge>Scalable Architecture</Badge>
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h4 className="text-xl font-semibold text-(--text-primary) mb-3">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>JavaScript (ES6+)</Badge>
                <Badge>Astro</Badge>
                <Badge>HTML5 & CSS3</Badge>
                <Badge>Tailwind CSS</Badge>
              </div>
            </div>

            {/* UI & UX */}
            <div>
              <h4 className="text-xl font-semibold text-(--text-primary) mb-3">UI & UX</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Responsive Design</Badge>
                <Badge>Figma to Code</Badge>
                <Badge>Accessibility Basics</Badge>
                <Badge>UI Components</Badge>
              </div>
            </div>

            {/* Tools & Workflow */}
            <div>
              <h4 className="text-xl font-semibold text-(--text-primary) mb-3">Tools & Workflow</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>GitHub</Badge>
                <Badge>Jira</Badge>
                <Badge>Agile / Scrum</Badge>
                <Badge>Performance Optimization</Badge>
                <Badge>SEO Basics</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
