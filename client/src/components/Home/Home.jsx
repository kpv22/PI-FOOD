import React from "react";
import { Recipe } from "../Recipe/Recipe";
import { Header } from "../Header/Header.jsx";
import style from "./Home.module.css";
import { SideBar } from "../Side/SideBar";
import { Footer } from "../Footer/Footer.jsx";
import { Nav } from "../Nav/Nav";

export const Home = (props) => {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <Nav />
        <div className={style.envolver}>
          <SideBar />
          <Recipe />
        </div>
        <Footer />
      </div>
    </div>
  );
};
