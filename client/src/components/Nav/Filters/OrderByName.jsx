import React from "react";
import * as actions from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Style from "../Nav.module.css";

export const OrderByName = (props) => {
  const dispatch = useDispatch();

  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(actions.getRecipes());
  }, []);

  const HandleSort = (e) => {
    e.preventDefault();
    dispatch(actions.orderByLetter(e.target.value));
    dispatch(actions.change_page(1));
    setOrder(`Ordered by ${e.target.value}`);
  };

  // el usuario selecciona una opción del menú, se invoca el manejador de eventos HandleSort. Este manejador de eventos utiliza el valor seleccionado por el usuario para enviar una acción de redux a través del despachador de acciones (obtenido con useDispatch). La acción enviada es actions.orderByLetter, que se usa para ordenar la lista de recetas alfabéticamente según la opción seleccionada. También se envía la acción actions.change_page con un valor de 1, lo que se puede interpretar como una indicación de que se debe mostrar la primera página de la lista de recetas ordenada.

  return (
    <div className={Style.btn}>
      <select onChange={(e) => HandleSort(e)}>
        <option selected disabled>
          Letter
        </option>
        <option className={Style.option} value="A-Z">
          A-Z
        </option>
        <option className={Style.option} value="Z-A">
          Z-A
        </option>
      </select>
    </div>
  );
};
