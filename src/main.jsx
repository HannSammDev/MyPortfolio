import React from "react";
import * as ReactDOM from "react-dom/client"; // ← this is required
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "flowbite";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Layout } from "./layout";
import { Test } from "./test";
// import { GeoPage } from "./PortfolioPages";

const App = () => (
  <Router>
    <Routes>
      {/* <Route path='/landingpage' element ={<GeoPage/>}/> */}
      <Route path="/" element={<Layout />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
