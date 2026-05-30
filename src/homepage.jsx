import React from "react";
import { Image } from "primereact/image";
import AOS from "aos";
import { useEffect } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(56, 189, 248, 0.18), transparent 28%),
          radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.16), transparent 32%),
          linear-gradient(135deg, #020617 0%, #152236 45%, #1f3b80 100%)`,
      }}
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-10 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div
            data-aos="fade-left"
            className="order-1 lg:order-2 relative mx-auto flex w-full max-w-md items-center justify-center"
          >
            <div className="absolute -left-8 top-4 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="absolute -right-6 bottom-8 h-44 w-44 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-950/80 p-4 sm:p-6 shadow-2xl shadow-slate-950/40">
              <div className="relative mx-auto h-[260px] w-[260px] overflow-hidden rounded-full border-4 border-slate-800 bg-slate-900 shadow-xl shadow-sky-500/20 sm:h-80 sm:w-80">
                <Image
                  src="./profile.jpg"
                  alt="Profile photo of Sam"
                  preview
                  width="320"
                  imageClassName="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6 rounded-3xl bg-slate-900/80 p-4 text-center shadow-inner shadow-slate-950/50 sm:px-5 sm:py-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Web Developer
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-100">
                  React · Tailwind · Firebase
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="order-2 lg:order-1 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-sky-200 shadow-sm shadow-sky-500/10 lg:justify-start">
              <span className="h-1.5 w-12 rounded-full bg-sky-400"></span>
              <span>Web Development • React • Tailwind • Firebase</span>
            </div>
            <div>
              <h1 className="text-4xl font-semibold text-slate-100 sm:text-5xl">
                Hi, I'm <span className="text-sky-300">Sam</span>
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                I build clean, modern websites with powerful front-end
                experiences using React, Tailwind, and Firebase.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {[
                "ReactJS",
                "Tailwind",
                "Firebase",
                "JavaScript",
                "UI Design",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 shadow-sm shadow-slate-900/50"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="https://www.linkedin.com/in/beleganio-hann-samm-a-22925b36a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-sky-500 bg-slate-900/40 text-sky-300 transition hover:border-sky-300 hover:bg-sky-500 hover:text-white"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/hannsamm.beleganio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 bg-slate-900/40 text-slate-300 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <FaFacebookSquare className="text-2xl" />
              </a>
              <a
                href="mailto:hannsammbeleganio@gmail.com"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-rose-500 bg-slate-900/40 text-rose-300 transition hover:border-rose-400 hover:bg-rose-500 hover:text-white"
              >
                <BiLogoGmail className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
