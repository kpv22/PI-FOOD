import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import styles from "./SearchBar.module.css";

export const SearchBar = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.searchName(name));
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        placeholder="Search Recipe"
        type="text"
        onChange={handleChange}
      />
      <button className={styles.btn} onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};
