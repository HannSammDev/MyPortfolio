import React from "react";
import { Image } from 'primereact/image';
export const Test = () => {
    return (
        <>
            <div className="h-80">

            </div>
            <div  id="project" className="flex items-center mb-6">
                <div className="flex-grow border-t border-white"></div>
                <h2 className="mx-4 font-bold text-4xl text-white whitespace-nowrap">My Projects</h2>
                <div className="flex-grow border-t border-white"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 place-items-center">
                <div className="text-center md:text-left max-w-md">
                    <figure className="relative max-w-sm flex justify-center transition-all duration-300 cursor-pointer ">
                        <a href="#">
                            <Image imageClassName="rounded-lg" preview src="./project.png" alt="image description" />
                        </a>
                        <figcaption className="absolute px-4 text-lg text-black bottom-6">
                            <p>Bluewaves Web-Portal</p>
                        </figcaption>
                    </figure>
                </div>

                <div className="text-center md:text-left max-w-md">
                    <figure className="relative max-w-sm flex justify-center transition-all duration-300 cursor-pointer ">
                        <a href="#">
                            <Image imageClassName="rounded-lg" preview src="./pro.png" alt="image description" />
                        </a>
                        <figcaption className="absolute px-4 text-lg text-black bottom-6">
                            <p>Bluewaves Web-Portal</p>
                        </figcaption>
                    </figure>
                </div>

                <div className="text-center md:text-left max-w-md">
                    <figure className="relative max-w-sm flex justify-center transition-all duration-300 cursor-pointer ">
                        <a href="#">
                            <Image imageClassName="rounded-lg" preview src="./pro.png" alt="image description" />
                        </a>
                        <figcaption className="absolute px-4 text-lg text-black bottom-6">
                            <p>Bluewaves Web-Portal</p>
                        </figcaption>
                    </figure>
                </div>

                <div className="text-center md:text-left max-w-md">
                    <figure className="relative max-w-sm flex justify-center transition-all duration-300 cursor-pointer ">
                        <a href="#">
                            <Image imageClassName="rounded-lg" preview src="./pro.png" alt="image description" />
                        </a>
                        <figcaption className="absolute px-4 text-lg text-black bottom-6">
                            <p>Bluewaves Web-Portal</p>
                        </figcaption>
                    </figure>
                </div>
            </div>






            {/* <div id="test" className="h-128 bg-red-500">
                <h1>hello</h1>
            </div>
             <div id="test1" className="h-128 bg-black">
                <h1>hello</h1>
            </div>
             <div id="test2" className="h-128 bg-red-500">
                <h1>hello</h1>
            </div>
             <div id="test3" className="h-128 bg-black">
                <h1>hello</h1>
            </div> */}
        </>
    )
}