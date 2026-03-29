import ComponentLibrary from "../data/component-library.mdx";
import { Link } from "react-router-dom";

export default function ComponentLibraryPage() {
  return (
    <main className="min-h-screen bg-[#020b2d] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 lg:py-20">
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center text-sm text-white/70 transition hover:text-white">
            ← Back to Portfolio
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] md:p-10">
          <div className="mb-10">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-white/60">Project Detail</p>
            <h1 className="text-3xl font-bold md:text-5xl">Astro Component Library</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/75">
              A reusable UI library built with Astro, Tailwind CSS, and Tailwind Variants, designed to support scalable
              frontend development and consistent design patterns across projects.
            </p>
          </div>

          <div className="component-library-content prose prose-invert max-w-none">
            <ComponentLibrary />
          </div>
        </div>
      </div>
    </main>
  );
}
