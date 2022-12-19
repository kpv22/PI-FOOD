import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useHistory } from "react-router-dom";
import validate from "./validate";
import { Link } from "react-router-dom";
import style from "./CreateRecipe.module.css";
import { Footer } from "../Footer/Footer.jsx";

export const CreateRecipe = (props) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const dietas = useSelector((state) => state.dietas);
  const history = useHistory();

  const [input, setInput] = useState({
    name: "",
    summary: "",
    healthScore: 10,
    image: "",
    diets: [],
    steps: "",
  });
  const [errorInput, setErrorInput] = useState({
    name: "",
    summary: "",
    healthScore: 0,
    image: "",
    diets: [],
    steps: "",
  });

  useEffect(() => {
    dispatch(actions.getDiets());
  }, [dispatch]);

  const handleCheckChange = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        diets: [...input.diets, e.target.value],
      });

      setErrorInput(
        validate({
          ...input,
          diets: [...input.diets, e.target.value],
        })
      );
    } else {
      setInput({
        ...input,
        diets: input.diets.filter((t) => t !== e.target.value),
      });

      setErrorInput(
        validate(
          {
            ...input,
            diets: input.diets.filter((t) => t !== e.target.value),
          },
          [...recipes]
        )
      );
    }
  };
  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    setErrorInput(
      validate({ ...input, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    dispatch(actions.postRecipes(input));
    setInput({
      ...input,
      name: "",
      summary: "",
      healthScore: 10,
      image: "",
      diets: [],
      steps: "",
    });
    alert("receta creada correctamente");
    history.push("/home");
  };

  return (
    <div className={style.createConteiner}>
      <div>
        <Link className={style.textDe} to="/home">
          <button className={style.btn2}>Back to home</button>
        </Link>

        <form className={style.form} onSubmit={() => handleSubmit()}>
          <div className={style.info}>
            <label>Name:</label>

            <input
              type="text"
              name="name"
              placeholder="Escribe el nombre de tu receta.."
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            {errorInput.name ? <span>{errorInput.name}</span> : <span></span>}
            <label>Descripcion:</label>

            <textarea
              type="text"
              name="summary"
              placeholder="Descripcion de tu receta"
              value={input.summary}
              onChange={(e) => handleChange(e)}
            />
            {errorInput.summary ? (
              <span>{errorInput.summary}</span>
            ) : (
              <span></span>
            )}
            <label>Puntaje nutricional:</label>
            <input
              type="number"
              name="healthScore"
              placeholder="¿Que puntaje nutricional posee?"
              value={input.healthScore}
              onChange={(e) => handleChange(e)}
            />
            {errorInput.healthScore ? (
              <span>{errorInput.healthScore}</span>
            ) : (
              <span></span>
            )}
            <label>Imagen:</label>
            <input
              type="text"
              name="image"
              placeholder="Por favor un enlace con la foto de tu receta"
              value={input.image}
              onChange={(e) => handleChange(e)}
            />
            {errorInput.image ? <span>{errorInput.image}</span> : <span></span>}

            <label>Pasos de preparacion:</label>
            <textarea
              type="text"
              name="steps"
              placeholder="Pasos para realizar la receta"
              value={input.steps}
              onChange={(e) => handleChange(e)}
            />
            {errorInput.steps ? <span>{errorInput.steps}</span> : <span></span>}

            {!Object.entries(errorInput).length ? (
              <button className={style.btn} type="submit">
                Create Recipe
              </button>
            ) : (
              <div>
                <button className={style.btnDisable} type="submit" disabled>
                  Create Recipe
                </button>
                <span>Incomplete required fields</span>
              </div>
            )}
          </div>

          <div className={style.map}>
            <div className={style.diets}>
              <label>Types of Diets:</label>
              {dietas?.map((element, index) => {
                return (
                  <label key={index}>
                    <input
                      className={style.checks}
                      key={element.id}
                      type="checkbox"
                      value={element.name}
                      name={element.name}
                      onChange={handleCheckChange}
                    />

                    {element.name}
                  </label>
                );
              })}
              {errorInput.diets ? (
                <span>{errorInput.diets}</span>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
