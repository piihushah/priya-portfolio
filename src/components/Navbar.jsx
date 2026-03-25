function Navbar() {
  const toggleTheme = () => {
    const html = document.documentElement
    const isDark = html.classList.toggle("dark")
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }

  return (
    <nav className="flex items-center gap-4">
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-md p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Toggle theme"
      >
        {/* Sun icon shown in dark mode */}
        <svg
          className="hidden h-5 w-5 text-yellow-500 dark:block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>

        {/* Moon icon shown in light mode */}
        <svg
          className="block h-5 w-5 text-gray-700 dark:hidden"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </nav>
  )
}

export default Navbar