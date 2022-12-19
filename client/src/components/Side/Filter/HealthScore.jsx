import React from "react";
import * as actions from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Style from "../SideBar.module.css";

export const HealthScore = () => {
  const dispatch = useDispatch();

  const filter = (e) => {
    e.preventDefault();
    dispatch(actions.orderByHs(e.target.value));
    dispatch(actions.change_page(1));
  };

  return (
    <div className={Style.select}>
      <select onChange={(e) => filter(e)}>
        <option value="max">Mayor a menor</option>
        <option value="desc">Menor a mayor</option>
      </select>
    </div>
  );
};
