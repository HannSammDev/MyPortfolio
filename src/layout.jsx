import React from "react";
import { MainPage } from "./header";
// import { Test } from "./test";
import { Home } from "./homepage";
import { Project } from "./project";
import { About } from "./about";
import { Technologies } from "./technologies";
import {ScrollTop} from 'primereact/scrolltop'
import { Footer } from "./footer";
export const Layout = () => {
    return (
        <>
            <ScrollTop className="d-flex justify-center align-center bg-blue-500 text-white rounded-full shadow-lg" style={{
                width: '2.5rem', height: '2.5rem', backgroundColor:'blue', display:'flex',alignItems:'center', justifyItems:'center'
            }} />
            <MainPage />
            <Home />
            <About />
            <Project />
            <Technologies />
            <Footer/>
            {/* <Test /> */}

        </>
    )
}