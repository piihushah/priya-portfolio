import { useState } from "react";
import MenuLinks from "./MenuLinks";
import ThemeToggle from "./Base/ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-(--background) shadow-md transition-colors">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center md:space-x-12 md:gap-10">
            <span className="text-2xl font-bold tracking-tighter text-(--subtle)">PS.</span>

            <div className="hidden md:block">
              <MenuLinks />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-md p-2 text-(--text-primary) transition-colors hover:bg-(var(--border)) md:hidden"
              aria-label="Toggle menu"
            >
              <svg
                className={menuOpen ? "hidden h-6 w-6" : "block h-6 w-6"}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg
                className={menuOpen ? "block h-6 w-6" : "hidden h-6 w-6"}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-(--border) py-4 block md:hidden">
            <MenuLinks mobile onItemClick={() => setMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
