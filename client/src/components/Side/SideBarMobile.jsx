import React from "react";
import { Dietas } from "./FilterDietas/Dietas";
import Style from "./SideBarMobile.module.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useState, useEffect } from "react";
import x from "../../assets/Icon/x.png";

export const SideBarMobile = (props) => {
  // Se define una variable de estado para almacenar las dietas seleccionadas
  const [seleccionadas, setSeleccionadas] = useState([]);

  const dispatch = useDispatch();
  const recetas2 = useSelector((state) => state.recipeCopy);

  // Esta función cambia el valor de la propiedad "burger" del estado global a "false"
  const handleClickClose = () => {
    dispatch(actions.Burger(false));
  };

  const closeIcon = (
    <img
      className={Style.x}
      src={x}
      alt="Icono de x"
      onClick={() => {
        handleClickClose();
      }}
    />
  );

  //filtro de dietas
  // Esta función maneja el evento de cambio en los checkboxes del menú lateral
  // y agrega o elimina las dietas seleccionadas en el arreglo seleccionadas
  const handleChange2 = (e) => {
    const name = e.target.value;
    const buscar = seleccionadas.find((ele) => ele === name);
    if (buscar) {
      setSeleccionadas(seleccionadas.filter((dietas) => dietas !== name));
    } else {
      setSeleccionadas([...seleccionadas, e.target.value]);
    }
  };

  // Esta función maneja el evento de cambio en los checkboxes del menú lateral
  // y agrega o elimina las dietas seleccionadas en el arreglo seleccionadas
  const filtroDietas = (seleccionadas, dietas) => {
    for (const id of seleccionadas) {
      const result = dietas?.find((ele) => ele === id);
      if (!result) return false;
    }
    return true;
  };
  const filtro = recetas2?.filter((ele) =>
    filtroDietas(seleccionadas, ele.diets)
  );

  useEffect(() => {
    dispatch(actions.filterByDiets(filtro));
  }, [seleccionadas]);

  const handleClick = () => {
    window.location.reload();
  };
  return (
    <div className={Style.divContainer}>
      <div className={Style.h2}>
        <h2>Filter By Diets</h2>
        {closeIcon}
      </div>

      <Dietas handleChange2={handleChange2} />
      <button className={Style.btn} onClick={(event) => handleClick(event)}>
        <p>Limpiar filtros</p>
      </button>
    </div>
  );
};
