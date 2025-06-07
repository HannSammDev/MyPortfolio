import React from "react";
import { MainPage } from "./header";
import { Test } from "./test";
import { Home } from "./homepage";

export const Layout = () => {
    return (
    <>
        <MainPage/>
        <Home/>
        <Test/>
        
    </>
    )
}