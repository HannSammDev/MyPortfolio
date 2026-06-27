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
        <ScrollTop
          className="d-flex justify-center align-center bg-blue-500 text-white  shadow-lg"
          style={{
            width: "2.5rem",
            height: "2.5rem",
            backgroundColor: " rgb(3, 3, 78)",
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            
          }}
        />
        <MainPage />
        <Home />
        <Technologies />
        <Project />
        <About />
        <Footer />
        {/* <Test /> */}
      </>
    );
}