import React from "react";
import { Dietas } from "./FilterDietas/Dietas";
import * as actions from "../../redux/actions";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Style from "./SideBar.module.css";

export const SideBar = (props) => {
  const dispatch = useDispatch();

  function refreshPage() {
    window.location.reload();
  }

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(actions.getRecipes());
    refreshPage();
  };

  return (
    <>
      <div className={Style.divContainer}>
        <div className={Style.filters}>
          <div className={Style.filterCon}></div>

          <h2>Filter by diet</h2>

          <br />
          <br />

          <div>
            <Dietas />
          </div>

          <NavLink
            onClick={(event) => handleClick(event)}
            className={Style.textDe}
            to="/home"
          >
            <button className={Style.btn}>Reset</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
