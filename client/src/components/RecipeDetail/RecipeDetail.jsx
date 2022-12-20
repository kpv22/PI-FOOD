import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as actions from "../../redux/actions";
import { Link } from "react-router-dom";
import Style from "./RecipeDetail.module.css";

export const RecipeDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const recipeId = useSelector((state) => state.recipeId);

  useEffect(() => {
    dispatch(actions.RecipeID(id));
    dispatch(actions.getDiets());
  }, [dispatch, id]);

  console.log(recipeId);

  return (
    <div className={Style.container}>
      <Link to="/home">
        <button
          className={Style.button}
          onClick={() => dispatch(actions.ClearId())}
        >
          Regresar al home
        </button>
      </Link>
      <h1 className={Style.name}>{recipeId.name}</h1>
      <img className={Style.img} src={recipeId.image} alt={recipeId.name} />
      <h4 className={Style.healthScore}>Health Score</h4>
      <h3>{recipeId.healthScore}</h3>
      <br />
      {/* veo si esta creado en la base de datos asi le puedo agregar
      botones delete o edit */}
      {console.log(id.length)}
      {id.length > 6 ? (
        <>
          <button className="mi-boton">Haz clic aquí</button>
          <h1>Este es el título</h1>
        </>
      ) : null}
      {/* {(recipeId.id.length > 8)(console.log(recipeId.name))} */}
      <h4 className={Style.diets}>Diets</h4>
      {recipeId.diets?.map((ele, index) => (
        <h3 className={Style.diet} key={index}>
          {ele}
        </h3>
      ))}

      {recipeId.steps ? <h4 className={Style.step}>Steps</h4> : <h4></h4>}
      {/* <h4 className={Style.step}>Steps</h4> */}
      <div>
        {recipeId.steps ? (
          <p className={Style.steps}>{recipeId.steps}</p>
        ) : (
          <p></p>
        )}
      </div>
      {/*  */}
      <h4>Summary</h4>
      <p>
        <p
          className={Style.summary}
          dangerouslySetInnerHTML={{ __html: recipeId?.summary }}
        />
      </p>
    </div>
  );
};
