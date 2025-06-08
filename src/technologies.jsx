import React from "react";
// import { Image } from 'primereact/image';
import AOS from "aos";
import 'aos/dist/aos.css';
import 'animate.css';
import { useEffect } from "react";
import { Card } from 'primereact/card';
export const Technologies = () => {
    useEffect(() => {
        AOS.init({
            duration: 800
            //   once: false, 
        });
    }, []);
    return (
        <>
            <div className="h-0">

            </div>
            <div className="mb-10">
                <div className="card border">
                    <Card
                        title={<span className="text-white text-2xl font-bold">TECHNOLOGIES</span>}
                        className="border border-white m-5 p-5 bg-white/10 backdrop-blur-md dark:bg-gray-900/10 dark:backdrop-blur-md"
                    >
                        <div className="grid grid-cols-5 gap-4 mt-5">
                            <img
                                data-aos='fade-up'
                                alt="HTML5"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                className="w-10 h-10 border border-transparent hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/50 transform hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                data-aos='fade-up'
                                alt="CSS3"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                className="w-10 h-10 border border-transparent hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-110 transition-transform duration-300"
                            />
                            {/* <img
                            data-aos='fade-up'
                                alt="Tailwind CSS"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                                className="w-10 h-10 border border-transparent hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-110 transition-transform duration-300"
                            /> */}
                            <img
                                data-aos='fade-up'
                                alt="Bootstrap"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                                className="w-10 h-10 border border-transparent hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/50 transform hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                data-aos='fade-up'
                                alt="JavaScript"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                className="w-10 h-10 border border-transparent hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/50 transform hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                data-aos='fade-up'
                                alt="React"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                className="w-10 h-10 border border-transparent hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                data-aos='fade-up'
                                alt="Firebase"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                                className="w-10 h-10 border border-transparent hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/50 transform hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                data-aos='fade-up'
                                alt="Node.js"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                className="w-10 h-10 border border-transparent hover:border-green-500 hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                data-aos='fade-up'
                                alt="PHP"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                                className="w-10 h-10 border border-transparent hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/50 transform hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                data-aos='fade-up'
                                alt="GitHub"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                className="w-10 h-10 border border-transparent hover:border-gray-950 hover:shadow-lg hover:shadow-dark transform hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                data-aos='fade-up'
                                alt="Python"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                className="w-10 h-10 border border-transparent hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                data-aos='fade-up'
                                alt="Git"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                className="w-10 h-10 border border-transparent hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/50 transform hover:scale-110 transition-transform duration-300"
                            />

                        </div>
                    </Card>
                </div>

            </div>
        </>
    )
}