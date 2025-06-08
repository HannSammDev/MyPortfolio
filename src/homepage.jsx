import React from "react";
import { Image } from 'primereact/image';
import AOS from "aos";
import { useEffect } from "react";
export const Home = () => {

    useEffect(() =>{
        AOS.init({
            duration: 800
        })
    },[])
    return (
        <>
            <div id="home" className="h-30">

            </div>
            <div  className="flex flex-col-reverse md:flex-row items-center justify-evenly gap-2 p-4">
                <div data-aos='fade-up' className="text-center md:text-left max-w-md">
                    <span className="block text-4xl text-gray-200 font-semibold mb-4">
                        Hi, I'm <strong className="text-blue-300 font-bold">Sam</strong>,
                    </span>
                    <span className="text-justify text-xl text-gray-200 font-light leading-relaxed">
                        I'm a <span className="font-medium text-blue-300">web developer</span> who can provide
                        website solutions for your <span className="italic">business</span>, <span className="italic">school projects</span>, or <span className="italic">capstone</span>.
                    </span>


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