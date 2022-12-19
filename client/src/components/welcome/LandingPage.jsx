import React from "react";
import { Link } from "react-router-dom";
import styles from "../welcome/LandingPage.module.css";
import Video3 from "../../assets/Video3.mp4";

export function Landing(props) {
  return (
    <div className={styles.Landing}>
      <div className={styles.overlay}></div>
      <video src={Video3} muted autoPlay loop />
      <div className={styles.content}>
        <h1>Welcome</h1>
        <p>To my site</p>
        <Link className={styles.textDe} to="/home">
          <button className={styles.btn}>Home</button>{" "}
        </Link>
      </div>
    </div>
  );
}
