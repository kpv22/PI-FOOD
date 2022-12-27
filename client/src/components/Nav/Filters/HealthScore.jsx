import React from "react";
import * as actions from "../../../redux/actions";
import { useDispatch } from "react-redux";
import Style from "../Nav.module.css";

export const HealthScore = () => {
  const dispatch = useDispatch();

  const filter = (e) => {
    e.preventDefault();
    dispatch(actions.orderByHs(e.target.value));
    dispatch(actions.change_page(1));
  };

  // Cuando el usuario selecciona una opción del menú, se invoca el manejador de eventos filter. Este manejador de eventos utiliza el valor seleccionado por el usuario para enviar una acción de redux a través del despachador de acciones (obtenido con useDispatch). La acción enviada es actions.orderByHs, que se usa para ordenar la lista de recetas por puntaje de salud según la opción seleccionada. También se envía la acción actions.change_page con un valor de 1, de que se debe mostrar la primera página de la lista de recetas ordenada.

  return (
    <div className={Style.btn}>
      <select onChange={(e) => filter(e)}>
        <option selected disabled>
          Health Score
        </option>
        <option value="max">Max to min</option>
        <option value="desc">Min to Max</option>
      </select>
    </div>
  );
};
