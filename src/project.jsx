import React from "react";
import { Image } from 'primereact/image';
import { Button } from "primereact/button";
import AOS from "aos";
import 'aos/dist/aos.css';
import 'animate.css';
import { useEffect } from "react";
import { Card } from 'primereact/card';

const projectData = [
  {
    title: "Bluewaves Web Portal",
    image: "./project.png",
    description:
      "A polished client-facing portal that showcases services and helps users quickly connect with the business.",
    tech: ["ReactJS", "JavaScript", "Bootstrap", "FontAwesome", "Firebase"],
    liveUrl: "#",
        built:'React + Boatstrap'
  },
  {
    title: "Demprint's ERP",
    image: "./demprint.png",
    description:
      "A custom ERP dashboard built for internal business operations with responsive UI and modular components.",
    tech: ["NextJS", "JavaScript", "Tailwind", "MongoDB", "Ant Design Icons"],
    liveUrl: "#",
    built:'Next + Tailwind'
  },
  {
    title: " Web-based Task Manager",
    image: "./taskf.png",
    description:
      "A task management application designed to help teams organize and track their work efficiently.",
    tech: ["ReactJS", "JavaScript", "Tailwind","ReactIcons" ,"Firebase"],
    liveUrl: "#",
    built:'React + Tailwind'

  },
];

export const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <section
      className="px-4 py-8 lg:px-8"
      id="project"
      style={{ backgroundColor: "#0a0f2c" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-1 w-16 rounded-full bg-blue-400"></span>
            <h2 className="text-4xl font-bold text-white">My Projects</h2>
            <span className="h-1 w-16 rounded-full bg-blue-400"></span>
          </div>
          <p className="max-w-2xl mx-auto text-sm text-gray-300">
            I build responsive React applications using modern tools like
            Tailwind CSS, Firebase, and icons from Ant Design.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {[
            "ReactJS",
            "JavaScript",
            "Tailwind",
            "Firebase",
            "Ant Design Icons",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-500 bg-blue-900/40 px-4 py-2 text-sm font-medium text-blue-300 shadow-sm transition hover:bg-blue-800/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projectData.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden rounded-3xl border border-slate-700 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ backgroundColor: "#0d1b3e" }}
              data-aos="zoom-in-up"
              title={<span className="text-white">{project.title}</span>}
              footer={
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Button
                    severity="info"
                    size="small"
                    label="View Live"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  />
                  <span className="text-xs text-slate-400">
                    Built with {project.built}
                  </span>
                </div>
              }
              header={
                <Image
                  className="rounded-t-3xl object-cover h-52 w-full"
                  preview
                  alt={project.title}
                  src={project.image}
                  imageClassName="object-cover h-52 w-full"
                />
              }
            >
              <p className="mb-4 text-sm leading-6 text-slate-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
