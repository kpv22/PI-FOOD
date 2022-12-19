import React from "react";
import * as actions from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Style from "../SideBar.module.css";

export const DesAsc = (props) => {
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

  return (
    <div>
      <select className={Style.select} onChange={(e) => HandleSort(e)}>
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
