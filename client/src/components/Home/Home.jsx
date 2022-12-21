import React from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../Recipe/Recipe";
import { Header } from "../Header/Header.jsx";
import { Empty } from "../Empty/Empty";
import { useSelector } from "react-redux";
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
          {/* aqui la barra de los filtros */}
          <Recipe />
        </div>
        <Footer />
      </div>
    </div>
  );
};
