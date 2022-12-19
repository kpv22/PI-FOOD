import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as actions from "../../../redux/actions";
import { useDispatch } from "react-redux";
import Style from "../SideBar.module.css";

export const Dietas = () => {
  const dietas = useSelector((state) => state.dietas);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getDiets());
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(actions.filterByDiets(e.target.value));
  };

  return (
    <div className={Style.diets}>
      {dietas?.map((temp, index) => (
        <button
          className={Style.btn}
          key={index}
          onClick={(e) => handleChange(e)}
          value={temp.name}
        >
          {temp.name}
        </button>
      ))}
    </div>
  );
};
