import React from "react";
import * as actions from "../../../redux/actions";
import { useDispatch } from "react-redux";
import Style from "../Nav.module.css";

export const Created = (props) => {
  const dispatch = useDispatch();

  const createdFilterHandler = (e) => {
    dispatch(actions.filterCreated(e.target.value));
    dispatch(actions.change_page(1));
  };
  return (
    <div className={Style.btn}>
      <select onChange={(e) => createdFilterHandler(e)}>
        <option value="api">Api Create</option>
        <option value="database">Created</option>
      </select>
    </div>
  );
};
