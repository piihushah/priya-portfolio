import Button from "./Button";

function Hero() {
  return (
    <div className="section">
      <div className="container flex flex-col gap-5">
        <h1 className="text-2xl md:text-4xl font-bold text-(--text-primary) md:max-w-2xl">
          Frontend Developer <br />
          <span className="text-(--text-accent) ">Frontend Developer with 4+ years of experience</span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-(--text-secondary) md:max-w-2xl">
          Hi, I’m Priya. I’m a frontend developer based in Perth with 4+ years of experience building responsive
          websites, reusable UI components, and user-friendly digital experiences. I focus on clean code, performance,
          and practical design.
        </p>
        <div className="flex flex-wrap gap-5">
          <Button onClick={() => window.open("/assets/Priya_Shah_Resume_2026.pdf", "_blank")}>View CV</Button>
          <Button onClick={() => window.open("#projects")}>View Projects</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
