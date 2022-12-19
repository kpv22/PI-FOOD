import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { SearchBar } from "./SearchBar.jsx";

export const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.fatherSticky}>
        <div className={styles.nav}>
          <h1>PI-FOOD</h1>
          <Link to="/create" className={styles.textDe}>
            <button className={styles.btn}>Create</button>
          </Link>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};
