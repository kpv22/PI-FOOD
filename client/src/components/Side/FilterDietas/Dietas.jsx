import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as actions from "../../../redux/actions";
import { useDispatch } from "react-redux";
import Style from "./Dietas.module.css";

export const Dietas = (props) => {
  // lista de checkboxes  para que pueda seleccionar las dietas por las que quiere filtrar las recetas
  const dietas = useSelector((state) => state.dietas);
  const dispatch = useDispatch();
  // Al seleccionar o deseleccionar un checkbox, se ejecuta una función que se le pasa como props

  useEffect(() => {
    dispatch(actions.getDiets());
  }, []);
  console.log(props);

  return (
    <div className={Style.diets}>
      {dietas?.map((diet) => {
        return (
          <div key={diet.name}>
            <input
              className={Style.checkbox}
              type="checkbox"
              id={diet.id}
              value={diet.name}
              onChange={props.handleChange2}
            />
            <label htmlFor={diet.id} className={Style.name}>
              {diet.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};
