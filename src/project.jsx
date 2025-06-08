import React from "react";
import { Image } from 'primereact/image';
import AOS from "aos";
import 'aos/dist/aos.css';
import 'animate.css';
import { useEffect } from "react";
export const Project = () => {
    useEffect(() => {
        AOS.init({
              duration: 800 
            //   once: false, 
        });
    }, []);
    return (
        <>
            <div className="h-20">

            </div>
            <div id="project" className="flex items-center mb-6">
                <div className="flex-grow border-t border-white"></div>
                <h2 className="mx-4 font-bold text-4xl text-white whitespace-nowrap">My Projects</h2>
                <div className="flex-grow border-t border-white"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 place-items-center bg-white/10 backdrop-blur-md dark:bg-gray-900/10 dark:backdrop-blur-md">
                <div className="transition-transform duration-500 transform hover:scale-110 text-center md:text-left max-w-md">
                    <figure data-aos="zoom-in-up"  className="relative max-w-sm flex justify-center transition-all duration-300 cursor-pointer ">
                        <a href="#project" className="">
                            <Image imageClassName="rounded-lg" preview src="./project.png" alt="image description" />
                        </a>
                        <figcaption className="absolute px-4 text-lg text-black bottom-6">
                            <p className="text-black dark:text-white">Bluewaves Web-Portal</p>
                        </figcaption>
                    </figure>

                </div>
                <div className="transition-transform duration-300 transform hover:scale-110 text-center md:text-left max-w-md">
                    <figure data-aos='zoom-in-up' className="relative max-w-sm flex justify-center transition-all duration-300 cursor-pointer ">
                        <a href="#project">
                            <Image imageClassName="rounded-lg" preview src="./pro.png" alt="image description" />
                        </a>
                        <figcaption className="absolute px-4 text-lg text-black bottom-6">
                            <p className="text-black dark:text-white">Bluewaves Web-Portal</p>
                        </figcaption>
                    </figure>
                </div>
                <div className="transition-transform duration-300 transform hover:scale-110 text-center md:text-left max-w-md">
                    <figure data-aos='zoom-in-up' className="relative max-w-sm flex justify-center transition-all duration-300 cursor-pointer  ">
                        <a href="#project">
                            <Image imageClassName="rounded-lg" preview src="./pro.png" alt="image description" />
                        </a>
                        <figcaption className="absolute px-4 text-lg text-black bottom-6">
                            <p className="text-black dark:text-white">Bluewaves Web-Portal</p>
                        </figcaption>
                    </figure>
                </div>
                <div className="transition-transform duration-300 transform hover:scale-110 text-center md:text-left max-w-md">
                    <figure data-aos='zoom-in-up' className="relative max-w-sm flex justify-center transition-all duration-300 cursor-pointer ">
                        <a href="#project">
                            <Image imageClassName="rounded-lg" preview src="./pro.png" alt="image description" />
                        </a>
                        <figcaption className="absolute px-4 text-lg text-black bottom-6">
                            <p className="text-black dark:text-white">Bluewaves Web-Portal</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </>
    )
}