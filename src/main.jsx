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
import { styles } from "./style";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className={styles.bgHero}>
      <StarsCanvas />
      <div className="mb-10">
        <Header />
      </div>
      <div className={styles.content}>
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
