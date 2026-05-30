import { useEffect, useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#project", label: "Project" },
  { href: "#about", label: "About" },
  { href: "#technologies", label: "Technologies" },
];

export const MainPage = () => {
  const [navWhite, setNavWhite] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavWhite(window.scrollY > 90);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`border-b transition-all duration-500 backdrop-blur-xl ${
          navWhite
            ? "bg-white/95 border-slate-200 shadow-xl text-slate-900"
            : "bg-slate-950/80 border-slate-800 text-white"
        }`}
      >
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-3 lg:px-6">
          <a href="#home" className="flex flex-col items-start gap-0.5">
            <span
              className={`text-xl font-semibold transition-all duration-300 ${
                navWhite ? "text-slate-900" : "text-sky-300"
              }`}
            >
              HS DeV
            </span>
            <span
              className={`text-sm font-medium transition-all duration-300 ${
                navWhite ? "text-slate-500" : "text-slate-300"
              }`}
            >
              Web Developer
            </span>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="main-menu"
            aria-expanded={isOpen}
            className={`inline-flex items-center justify-center rounded-lg p-2 text-sm lg:hidden ${
              navWhite
                ? "text-slate-900 bg-slate-100/90"
                : "text-white bg-slate-900/40"
            } hover:bg-slate-200/80 focus:outline-none focus:ring-2 focus:ring-sky-400`}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div
            id="main-menu"
            className={`w-full transition-all duration-300 lg:flex lg:w-auto lg:items-center ${
              isOpen
                ? "block bg-slate-950/95 shadow-xl shadow-slate-950/40 lg:bg-transparent lg:shadow-none"
                : "hidden"
            }`}
          >
            {/* Breadcrumb / navigation links */}
            <ul className=" mt-4 flex flex-col gap-2 rounded-3xl border border-slate-800 bg-slate-950/95 p-4 text-sm font-medium shadow-xl shadow-slate-950/40 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-3 py-2 transition-all duration-200 ${
                      navWhite
                        ? "text-slate-700 hover:bg-slate-100 hover:text-sky-600"
                        : "text-slate-100 hover:bg-slate-800 hover:text-sky-300"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  onClick={() => setIsOpen(false)}
                  className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    navWhite
                      ? "border-sky-500 bg-sky-500/10 text-sky-700 hover:bg-sky-500/15"
                      : "border-slate-200 bg-slate-100/10 text-slate-100 hover:bg-slate-800"
                  }`}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
