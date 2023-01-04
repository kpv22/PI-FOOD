import React from "react";
import { Dietas } from "./FilterDietas/Dietas";
import Style from "./SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useState, useEffect } from "react";

export const SideBar = (props) => {
  // Se define una variable de estado para almacenar las dietas seleccionadas
  const [seleccionadas, setSeleccionadas] = useState([]);

  const dispatch = useDispatch();
  const recetas2 = useSelector((state) => state.recipeCopy);

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
  //filtro de dietas
  // Esta función verifica si una receta cumple con todas las dietas seleccionadas
  // Retorna true si cumple, false en caso contrario

  const filtroDietas = (seleccionadas, dietas) => {
    for (const id of seleccionadas) {
      const result = dietas?.find((ele) => ele === id);
      if (!result) return false;
    }
    return true;
  };
  // se utiliza esta función para filtrar el arreglo "recetas2" y se guarda el resultado en la variable "filtro". El arreglo "filtro" contiene las recetas que cumplen con todas las dietas seleccionadas.
  const filtro = recetas2?.filter((ele) =>
    filtroDietas(seleccionadas, ele.diets)
  );

  // //barrra de busqueda
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // };

  useEffect(() => {
    dispatch(actions.filterByDiets(filtro));
    dispatch(actions.change_page(1));
  }, [seleccionadas]);

  const handleClick = () => {
    window.location.reload();
  };
  return (
    <div className={Style.divContainer}>
      <h2>Filter By Diets</h2>
      <Dietas handleChange2={handleChange2} />
      <button className={Style.btn} onClick={(event) => handleClick(event)}>
        <p>Limpiar filtros</p>
      </button>
    </div>
  );
};
