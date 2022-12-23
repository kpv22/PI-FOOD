import React from "react";
import styles from "./Loading.module.css";
import loading from "../../assets/loading/hug.gif";

export const Loading = () => {
  return (
    <div className={styles.Loading}>
      {/* <h2>LOADING</h2> */}
      <div>
        <img className={styles.img} src={loading} alt="loading"></img>
      </div>
    </div>
  );
};
