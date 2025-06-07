import React from "react";
import { MainPage } from "./header";
// import { Test } from "./test";
import { Home } from "./homepage";
import { Project } from "./project";

export const Layout = () => {
    return (
    <>
        <MainPage/>
        <Home/>
        <Project/>
        {/* <Test/> */}
        
    </>
    )
}