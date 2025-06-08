import React from "react";
import { Image } from 'primereact/image';
export const About = () => {
    return (
        <>
            <div  className="h-55">

            </div>
            <div id="about" className="flex items-center mb-6">
                <div className="flex-grow border-t border-white"></div>
                <h2  className="mx-4 font-bold text-4xl text-white whitespace-nowrap">About</h2>
                <div className="flex-grow border-t border-white"></div>
            </div>
            <section className="bg-white/10 backdrop-blur-md dark:bg-gray-900/10 dark:backdrop-blur-md">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-lg xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <Image className="w-100 dark:hidden" src="./image.png" alt="dashboard image" preview />
                    {/* <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image" /> */}
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-50 dark:text-white">
                            Web Developer – Frontend & Full Stack Solutions
                        </h2>
                        <p className="text-justify mb-6 font-light text-gray-50 md:text-lg dark:text-gray-400">
                            Hi there! I’m a passionate web developer who loves creating clean, fast, and responsive websites and applications. Whether it's designing user interfaces or building out features behind the scenes, I enjoy turning ideas into real, working products.
                            <br /><br />
                            From planning and prototyping to coding and deployment, I take pride in delivering high-quality solutions that are both functional and user-friendly.
                            <br /><br />
                            I'm excited to collaborate and help bring your vision to life—let's build something great together!
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
                        >
                            Get started
                            <svg
                                className="ml-2 -mr-1 w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

        </>
    )
}