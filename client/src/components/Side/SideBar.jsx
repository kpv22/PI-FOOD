import React from "react";
import { Dietas } from "./Filter/Dietas";
import { DesAsc } from "./Filter/OrderByName";
import { HealthScore } from "./Filter/HealthScore";
import * as actions from "../../redux/actions";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Style from "./SideBar.module.css";
import style from "../Home/Home.module.css";

// import { useHistory } from "react-router-dom";
export const SideBar = (props) => {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(actions.getRecipes());
  };
  // const history = useHistory();
  return (
    <>
      <div className={Style.divContainer}>
        <div className={Style.filters}>
          {/* <h2>Sort by</h2> */}
          <div className={Style.filterCon}>
            {/* <DesAsc />
            <HealthScore /> */}
          </div>
          <h2>Filter by diet</h2>
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
