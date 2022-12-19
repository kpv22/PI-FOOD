import React from "react";
import style from "../Footer/Footer.module.css";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.infoLeft}>
        <h5>Information</h5>
        <span>
          Individual project soyHenry-Lab <br />
          Development by Kevin Picado
          <br />
          kvap224@gmail.com
          <br />
        </span>
      </div>
      <div className={style.infoRight}>
        <a href="https://www.linkedin.com/in/kevin-p-131203255/">
          LinkedIn
          <img
            src="https://i.postimg.cc/xThMr2PB/logo-Linkedin.png"
            alt="github"
          />
        </a>
        <a href="https://github.com/kpv22">
          GitHub
          <img
            src="https://i.postimg.cc/Vs9NRcSz/logo-Git-Hub.png"
            alt="github"
          />
        </a>
      </div>
    </div>
  );
};
