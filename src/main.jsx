import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StarsCanvas from "./components/canvas/Stars.jsx";
import Tiktok from "./components/Tiktok.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Github from "./components/Github";
import Linkedin from "./components/Linkedin";
import Gmail from "./components/Gmail";
import World from "./components/World";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-black relative z-0 h-screen flex items-center justify-center flex-col">
      <StarsCanvas />
      <div className="mb-10">
        <Header />
      </div>
      <div className="flex gap-[23px] sm:gap-10 w-full justify-center max-w-4xl items-center">
        <Tiktok />
        <Linkedin />
        <Gmail />
        <World />
        <Github />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);
