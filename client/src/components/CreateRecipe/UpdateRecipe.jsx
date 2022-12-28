import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useHistory } from "react-router-dom";
import validate from "./validate.js";
import Styles from "./CreateRecipe.module.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer.jsx";

export const UpdateRecipe = (props) => {
  const dispatch = useDispatch();
  const dietas = useSelector((state) => state.dietas);
  const recetas = useSelector((state) => state.recetas);
  const history = useHistory();
  const { id } = useParams();
  const recetaId = useSelector((state) => state.recipeId);

  useEffect(() => {
    dispatch(actions.RecipeID(id));
  }, []);
  console.log(recetaId);
  const [input, setInput] = useState({
    name: recetaId ? recetaId?.name : "",
    summary: recetaId ? recetaId.summary : "",
    healthScore: recetaId ? recetaId.healthScore : 10,
    image: recetaId ? recetaId.image : "",
    diets: recetaId ? recetaId.diets : [],
    steps: recetaId ? recetaId.steps : "",
  });
  const [errorInput, setErrorInput] = useState({
    name: "",
    summary: "",
    healthScore: 10,
    image: "",
    diets: [],
    steps: "",
  });

  useEffect(() => {
    if (!dietas.lenth) dispatch(actions.getDiets());
  }, [dispatch]);

  const handleCheckChange = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        diets: [...input.diets, e.target.value],
      });

      setErrorInput(
        validate(
          {
            ...input,
            diets: [...input.diets, e.target.value],
          },
          recetas
        )
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
          recetas
        )
      );
    }
  };
  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    setErrorInput(
      validate({ ...input, [event.target.name]: event.target.value }, recetas)
    );
  };

  const handleSubmit = (event) => {
    dispatch(actions.update(id, input));
    setInput({
      ...input,
      name: "",
      summary: "",
      healthScore: 10,
      image: "",
      diets: [],
      steps: "",
    });
    alert("Receta modificada correctamente");
    history.push("/detail/" + id);
  };

  return (
    <div className={Styles.createConteiner}>
      <div>
        <Link className={Styles.textDe} to="/home">
          <button className={Styles.btn2}>Back to home</button>
        </Link>

        <form className={Styles.form} onSubmit={() => handleSubmit()}>
          <div className={Styles.info}>
            <label>Name:</label>

            <input
              type="text"
              placeholder={recetaId?.name}
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            {errorInput.name ? <span>{errorInput.name}</span> : <span></span>}

            <label>Descripcion:</label>

            <textarea
              type="text"
              name="summary"
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
              type="text"
              name="healthScore"
              value={input.healthScore}
              onChange={(e) => handleChange(e)}
            />
            {input.healthScore.length ? (
              errorInput.healthScore && <p>{errorInput.healthScore}</p>
            ) : (
              <p></p>
            )}

            <label>Imagen:</label>

            <input
              type="text"
              name="image"
              placeholder="¿Quieres modificar la foto de tu receta?"
              value={input.image}
              onChange={(e) => handleChange(e)}
            />
            {errorInput.image ? <span>{errorInput.image}</span> : <span></span>}

            <label>Pasos de preparacion:</label>

            <textarea
              type="text"
              name="steps"
              value={input.steps}
              onChange={(e) => handleChange(e)}
            />
            {errorInput.steps && <p>{errorInput.steps}</p>}

            {!Object.entries(errorInput).length ? (
              <button className={Styles.btn} type="submit">
                Modificar Receta
              </button>
            ) : (
              <div>
                <button className={Styles.btnDisable} type="submit" disabled>
                  Modificar Receta
                </button>
                <p></p>
              </div>
            )}
          </div>

          <div className={Styles.map}>
            <div className={Styles.diets}>
              <label>La receta que modificas tiene las dietas:</label>
              {dietas?.map((diet) => {
                return (
                  <div key={diet.name}>
                    <input
                      type="checkbox"
                      className={Styles.checkbox}
                      id={diet.id}
                      value={diet.name}
                      onChange={handleCheckChange}
                      checked={input.diets.includes(diet.name)}
                    />
                    <label htmlFor={diet.id} className={Styles.name}>
                      {diet.name}
                    </label>
                  </div>
                );
              })}

              {errorInput.diets && <p>{errorInput.diets}</p>}
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
