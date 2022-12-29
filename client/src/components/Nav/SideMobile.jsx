import React from "react";
import { SideBarMobile } from "../Side/SideBarMobile";
import styles from "./Nav.module.css";
import h from "../../assets/Icon/h.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

export const SideMobile = () => {
  const boton = useSelector((state) => state.hamburguer);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(actions.Burger(true));
  };
  const hamburguerIcon = (
    <img
      className={styles.hambur}
      src={h}
      alt="Icono de hamburguesa"
      onClick={() => {
        handleClick();
      }}
    />
  );

  return (
    <nav className={styles.SideMobile}>
      {!boton ? hamburguerIcon : null}

      {boton && <SideBarMobile />}
    </nav>
  );
};
