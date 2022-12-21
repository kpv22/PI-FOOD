import React from "react";
import { Link } from "react-router-dom";
import styles from "../welcome/LandingPage.module.css";
import Video3 from "../../assets/Video3.mp4";

export function Landing(props) {
  return (
    <div className={styles.Landing}>
      <video src={Video3} muted autoPlay loop />
      <div className={styles.content}>
        <div className={styles.typewriter}>
          <h1 className={styles.title}>Hello, my name is Kevin.</h1>
          <div className={styles.subtitle}>Welcome to my website!</div>
          <Link className={styles.textDe} to="/home">
            <button className={styles.btn}>PI-FOOD</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
