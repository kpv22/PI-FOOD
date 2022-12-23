import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import styles from "./SearchBar.module.css";

export const SearchBar = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [error, setError] = useState(null); // agregamos un estado para el mensaje de error

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validamos el valor del campo de búsqueda
    const regex = /^[a-zA-Z0-9]+$/; // expresión regular que solo permite letras y números
    if (!regex.test(name)) {
      alert(
        "El campo de búsqueda no puede contener caracteres especiales o estar vacio"
      );
      return;
    }

    // si la validación es correcta, enviamos la búsqueda
    setError(null); // reseteamos el mensaje de error
    dispatch(actions.searchName(name));
  };

  return (
    <div className={styles.search}>
      {error && <div className={styles.error}>{error}</div>}
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
