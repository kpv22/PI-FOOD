import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as actions from "../../redux/actions";
import { Link } from "react-router-dom";
import Style from "./RecipeDetail.module.css";
import { Footer } from "../Footer/Footer.jsx";

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
    <div className={Style.detail}>
      <div className={Style.Nav}>
        <Link to="/home">
          <button
            className={Style.button}
            onClick={() => dispatch(actions.ClearId())}
          >
            Regresar al home
          </button>
        </Link>
        {console.log(id.length)}
        {id.length > 6 ? (
          <>
            <button className={Style.button}>Edit Recipe</button>
            <button className={Style.button}>Delete Recipe</button>
          </>
        ) : null}
      </div>
      <div className={Style.container}>
        <h1 className={Style.name}>{recipeId.name}</h1>
        <div className={Style.info}>
          <>
            <h4>Health Score</h4>
            <h3 className={Style.healthScore}>{recipeId.healthScore}</h3>
          </>

          <br />
          <div className={Style.diets}>
            <h4>Diets</h4>
            {recipeId.diets?.map((ele, index) => (
              <h3 className={Style.diet} key={index}>
                {ele}
              </h3>
            ))}
          </div>
        </div>
        <div className={Style.summary}>
          <p>
            <h4>Summary</h4>
            <p
              className={Style.text}
              dangerouslySetInnerHTML={{ __html: recipeId?.summary }}
            />
          </p>
          <img className={Style.img} src={recipeId.image} alt={recipeId.name} />
        </div>

        <div className={Style.step ? Style.steps : "hidden"}>
          {recipeId.steps ? <h4>Steps</h4> : <h4></h4>}
          <div>
            {recipeId.steps ? (
              <p className={Style.steps}>{recipeId.steps}</p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
