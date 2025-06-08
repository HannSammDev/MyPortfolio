import React from "react";
import { MainPage } from "./header";
import { Test } from "./test";
import { Home } from "./homepage";
import { Project } from "./project";
import { About } from "./about";
import { Technologies } from "./technologies";

export const Layout = () => {
    return (
    <>
        <MainPage/>
        <Home/>
        <About/>
        <Project/>
        <Technologies/>
        <Test/>
        
    </>
    )
}