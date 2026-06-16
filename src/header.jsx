import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#project", label: "Project" },
  { href: "#about", label: "About" },
  { href: "#technologies", label: "Technologies" },
];

export const MainPage = () => {
  const [navWhite, setNavWhite] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { hash } = useLocation();

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
            ? "bg-transparent/100 border-none shadow-xl text-white"
            : "bg-slate-950/80 border-slate-800 text-white"
        }`}
      >
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-3 lg:px-6">
          <a href="#home" className="flex flex-col items-start gap-0.5">
            <span
              className={`text-xl font-semibold transition-all duration-300 ${
                navWhite ? "text-slate-100" : "text-sky-300"
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
            className={`inline-flex items-center justify-center rounded-lg p-2 text-sm lg:hidden ${
              navWhite
                ? "text-blue-300 bg-slate-900/40  hover:bg-blue-200"
                : "text-white bg-slate-900/40 hover:bg-gray-300"
            }`}
          >
            <FiMenu className="h-6 w-6" />
          </button>

          <div
            className={`w-full transition-all duration-300 lg:flex lg:w-auto lg:items-center ${
              isOpen
                ? "block bg-slate-950/95 shadow-xl shadow-slate-950/40 lg:bg-transparent lg:shadow-none"
                : "hidden"
            }`}
          >
            <ul className="mt-4 flex flex-col gap-2 rounded-3xl  bg-slate-950/95 p-4 text-sm font-medium shadow-xl shadow-slate-950/40 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-3 py-2 transition-all duration-200 ${
                      hash === item.href
                        ? "bg-sky-500/20 text-sky-500"
                        : navWhite
                          ? "text-blue-300 hover:bg-slate-800 hover:text-sky-600"
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
                  className={`inline-flex items-center justify-center  border px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-full ${
                    navWhite
                      ? "border-sky-500 bg-sky-500/10 text-sky-700 hover:bg-sky-500/15"
                      : "border-slate-200 bg-slate-100/10 text-slate-100 hover:bg-slate-800"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
