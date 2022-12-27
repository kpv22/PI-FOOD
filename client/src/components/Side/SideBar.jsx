// import React from "react";
// import { Dietas } from "./FilterDietas/Dietas";
// import * as actions from "../../redux/actions";
// import { useDispatch } from "react-redux";
// import { NavLink } from "react-router-dom";
// import Style from "./SideBar.module.css";

// export const SideBar = (props) => {
//   const dispatch = useDispatch();

//   function refreshPage() {
//     window.location.reload();
//   }

//   const handleClick = (event) => {
//     event.preventDefault();
//     dispatch(actions.getRecipes());
//     refreshPage();
//   };

//   return (
//     <>
//       <div className={Style.divContainer}>
//         <div className={Style.filters}>
//           <div className={Style.filterCon}></div>

//           <h2>Filter by diet</h2>

//           <br />
//           <br />

//           <div>
//             <Dietas />
//           </div>

//           <NavLink
//             onClick={(event) => handleClick(event)}
//             className={Style.textDe}
//             to="/home"
//           >
//             <button className={Style.btn}>Reset</button>
//           </NavLink>
//         </div>
//       </div>
//     </>
//   );
// };

import React from "react";
import { Dietas } from "./FilterDietas/Dietas";
import Style from "./SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useState, useEffect } from "react";

export const SideBar = (props) => {
  const [seleccionadas, setSeleccionadas] = useState([]);

  const dispatch = useDispatch();
  const recetas2 = useSelector((state) => state.recipeCopy);

  //filtro de dietas
  const handleChange2 = (e) => {
    const name = e.target.value;
    const buscar = seleccionadas.find((ele) => ele === name);
    if (buscar) {
      setSeleccionadas(seleccionadas.filter((dietas) => dietas !== name));
    } else {
      setSeleccionadas([...seleccionadas, e.target.value]);
    }
  };

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

  // //barrra de busqueda
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value);
  // };

  useEffect(() => {
    dispatch(actions.filterByDiets(filtro));
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
