import React from "react";
import * as actions from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Style from "../Nav.module.css";

export const HealthScore = () => {
  const dispatch = useDispatch();

  const filter = (e) => {
    e.preventDefault();
    dispatch(actions.orderByHs(e.target.value));
    dispatch(actions.change_page(1));
  };

  return (
    <div className={Style.btn}>
      <select onChange={(e) => filter(e)}>
        <option value="max">Max to min</option>
        <option value="desc">Min to Max</option>
      </select>
    </div>
  );
};
