import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { useEffect } from "react";
import { Card } from "primereact/card";

const technologyList = [
  {
    label: "ReactJS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "blue-300",
  },
  {
    label: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "yellow-500",
  },
  {
    label: "Tailwind",
    src: "https://alfiecollins.com/assets/images/tailwindcss-logo.png",
    color: "cyan-400",
  },
  {
    label: "Bootstrap",
    src: "https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png",
    color: "purple-500",
  },
  {
    label: "Firebase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    color: "yellow-500",
  },
  {
    label: "Ant Design",
    src: "https://images.seeklogo.com/logo-png/38/1/ant-design-logo-png_seeklogo-380495.png",
    color: "teal-500",
  },
  {
    label: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "orange-500",
  },
  {
    label: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "blue-500",
  },
  {
    label: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "green-500",
  },
  {
    label: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "orange-500",
  },
];

export const Technologies = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <section id="technologies" className="relative z-10 px-4 py-10 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="h-1.5 w-20 rounded-full bg-sky-500"></span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Technologies I Use
            </h2>
            <span className="h-1.5 w-20 rounded-full bg-sky-500"></span>
          </div>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            I build modern user experiences with React, Tailwind, Firebase, and
            polished icon systems like Ant Design.
          </p>
        </div>

        <Card className="border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-none">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {technologyList.map((tech) => (
              <div
                key={tech.label}
                data-aos="fade-up"
                className="group rounded-3xl border border-slate-200 bg-slate-50 px-5 py-7 text-center transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950/80 dark:hover:border-sky-500 dark:hover:bg-slate-900"
              >
                <img
                  alt={`${tech.label} logo`}
                  src={tech.src}
                  className="mx-auto mb-4 h-12 w-12 object-contain transition duration-300 group-hover:scale-110"
                />
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {tech.label}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
