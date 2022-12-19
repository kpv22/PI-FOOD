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
    <div>
      <Link to="/home">
        <button onClick={() => dispatch(actions.ClearId())}>
          Regresar al home
        </button>
      </Link>
      <h1>{recipeId.name}</h1>
      <img className={Style.img} src={recipeId.image} alt={recipeId.name} />
      <h4>Health Score</h4>
      <h3>{recipeId.healthScore}</h3>
      <br />
      <h4>Diets</h4>
      {recipeId.diets?.map((ele, index) => (
        <h3 key={index}>{ele}</h3>
      ))}
      <br />
      <h4>Steps</h4>

      <div>
        <p>{recipeId.steps}</p>
      </div>
      <br></br>
      <h4>Summary</h4>
      <p>
        <p dangerouslySetInnerHTML={{ __html: recipeId?.summary }} />
      </p>
    </div>
  );
};
