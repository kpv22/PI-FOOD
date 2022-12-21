import React from "react";
import { Created } from "./Filters/Created";
import { HealthScore } from "./Filters/HealthScore";
import { OrderByName } from "./Filters/OrderByName";
import styles from "../Nav/Nav.module.css";

export const Nav = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <h2>Sort by</h2>
        <Created />
        <HealthScore />
        <OrderByName />
      </div>
    </div>
  );
};
