import React from "react";
import style from "./Empty.module.css";
const handleClick = () => {
  window.location.reload();
};
export const Empty = () => {
  return (
    <div className={style.empty}>
      <h2 className={style.h2}>
        Lo sentimos, no se encontraron recetas para la búsqueda realizada.
      </h2>
      <button className={style.btn} onClick={(event) => handleClick(event)}>
        <p>Reset</p>
      </button>
    </div>
  );
};
