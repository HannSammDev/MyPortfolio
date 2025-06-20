import React from "react";
import { Image } from 'primereact/image';
import AOS from "aos";
import { useEffect } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
export const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 800
        })
    }, [])
    return (
        <>
            <div id="home" className="scroll-smooth h-30">

            </div>
            <div className="flex flex-col-reverse md:flex-row items-center justify-evenly gap-2 p-4">
                <div data-aos="fade-up" className="text-center md:text-left max-w-md">
                    <h1 className="block text-4xl text-gray-200 font-semibold mb-4">
                        Hi, I'm <strong className="text-blue-300 font-bold">Sam</strong>,
                    </h1>
                    <p className="block text-justify text-xl text-gray-200 font-light leading-relaxed mb-4">
                        A <span className="font-medium text-blue-300">web developer</span> who can provide
                        website solutions for your <span className="italic">business</span>, <span className="italic">school projects</span>, or <span className="italic">capstone</span>.
                    </p>
                    <div className="flex justify-center md:justify-start items-center space-x-4">
                        <a
                            href="https://www.linkedin.com/in/beleganio-hann-samm-a-22925b36a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-200 rounded-full p-2"
                        >
                            <FaLinkedin className="text-2xl" />
                        </a>
                        <a
                            href="https://www.facebook.com/hannsamm.beleganio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 transition-all duration-200 rounded-full p-2"
                        >
                            <FaFacebookSquare className="text-2xl" />
                        </a>
                        <a
                            href="mailto:hannsammbeleganio@gmail.com"
                            className="border border-red-500 text-red-500 hover:text-white hover:bg-red-500 transition-all duration-200 rounded-full p-2"
                        >
                            <BiLogoGmail className="text-2xl" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="card transform hover:scale-110 transition-transform duration-300">
                        <Image
                            src="./profile.jpg"
                            alt="Image"
                            width="250"
                            preview
                            imageClassName="rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                        />
                    </div>
                </div>

            </div>
        </>
    )
}