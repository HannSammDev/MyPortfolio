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
    title: "Demprint's ERP",
    image: "./demprint.png",
    description: "A custom ERP dashboard built for internal business operations with responsive UI and modular components.",
    tech: ["ReactJS", "JavaScript", "Tailwind", "Firebase", "Ant Design Icons"],
    liveUrl: "#",
  },
  {
    title: "Bluewaves Web Portal",
    image: "./project.png",
    description: "A polished client-facing portal that showcases services and helps users quickly connect with the business.",
    tech: ["ReactJS", "JavaScript", "Tailwind", "Firebase", "Ant Design Icons"],
    liveUrl: "#",
  },
];

export const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <section className="px-4 py-8 lg:px-8" id="project">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-1 w-16 rounded-full bg-blue-600"></span>
            <h2 className="text-4xl font-bold text-blue-800">My Projects</h2>
            <span className="h-1 w-16 rounded-full bg-blue-600"></span>
          </div>
          <p className="max-w-2xl mx-auto text-sm text-gray-600 dark:text-gray-300">
            I build responsive React applications using modern tools like Tailwind CSS, Firebase, and icons from Ant Design.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {['ReactJS', 'JavaScript', 'Tailwind', 'Firebase', 'Ant Design Icons'].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
          {projectData.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900/90"
              data-aos="zoom-in-up"
              title={project.title}
              footer={
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Button
                    severity="info"
                    size="small"
                    label="View Live"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  />
                  <span className="text-xs text-slate-500 dark:text-slate-400">Built with React + Tailwind</span>
                </div>
              }
              header={
                <Image
                  preview
                  alt={project.title}
                  src={project.image}
                  imageClassName="rounded-t-3xl object-cover h-52 w-full"
                />
              }
            >
              <p className="mb-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
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
