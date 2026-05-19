import { useEffect, useState } from "react";

export const MainPage = () => {
  const [navWhite, setNavWhite] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectSection = document.getElementById("project");

      if (projectSection) {
        const rect = projectSection.getBoundingClientRect();

        // kapag nasa project section
        if (rect.top <= 100 && rect.bottom >= 100) {
          setNavWhite(true);
        } else {
          setNavWhite(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header>
        <nav
          className={`fixed w-full z-20 top-0 start-0 border-b px-4 lg:px-6 py-2.5 transition-all duration-500 ${
            navWhite
              ? "bg-white border-gray-300 shadow-lg"
              : "border-b-gray-500"
          }`}
          style={
            navWhite
              ? {}
              : {
                  background: `
                    radial-gradient(circle at top left, rgba(0, 140, 255, 0.15), transparent 30%),
                    radial-gradient(circle at bottom right, rgba(180, 0, 255, 0.18), transparent 35%),
                    linear-gradient(135deg, #081229 0%, #162a6c 45%, #2a3fa3 100%)
                  `,
                }
          }
        >
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            {/* LOGO */}
            <a
              href="https://www.facebook.com/hannsamm.beleganio"
              // Changed 'flex items-center' to 'flex flex-col items-center'
              className="flex flex-col items-center"
            >
              {/* <img
    className="w-10 h-10 mr-3 p-1 rounded-full ring-2 ring-gray-300"
    src="./profile.jpg"
    alt="Profile"
  /> */}

              <span
                className={`self-start text-xl font-semibold whitespace-nowrap transition-all duration-300 ${
                  navWhite ? "text-black" : "text-blue-400"
                }`}
              >
                HS DeV
              </span>

              <span
                className={`self-start text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  navWhite ? "text-black" : "text-white"
                }`}
              >
                Web Developer
              </span>
            </a>

            {/* MOBILE BUTTON */}
            <div className="flex items-center lg:order-2">
              <button
                type="button"
                className={`inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden ${
                  navWhite
                    ? "text-black hover:bg-gray-200"
                    : "text-white hover:bg-gray-700"
                }`}
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  />
                </svg>
              </button>
            </div>

            {/* NAV LINKS */}
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#project", label: "Project" },
                  { href: "#about", label: "About" },
                  { href: "#technologies", label: "Technologies" },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`block py-2 pr-4 pl-3 transition-all duration-300 ${
                        navWhite
                          ? "text-black hover:text-blue-700"
                          : "text-white hover:text-cyan-300"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}

                <li>
                  <a
                    href="/resume.pdf"
                    className={`block py-2 pr-4 pl-3 transition-all duration-300 ${
                      navWhite
                        ? "text-black hover:text-blue-700"
                        : "text-white hover:text-cyan-300"
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
    </>
  );
};
 