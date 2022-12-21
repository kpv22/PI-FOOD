import React from "react";
import { RecipeModel } from "./RecipeModel";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import Pagination from "../Pagination/Pagination.jsx";
import { useState } from "react";

import { Empty } from "../Empty/Empty";
import Style from "./Recipe.module.css";

export const Recipe = (props) => {
  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    dispatch(actions.getRecipes());
  }, []);

  const currentPage = useSelector((state) => state.currentPage);

  const recipesPage = 9;
  const lastIndex = currentPage * recipesPage;
  const firstIndex = lastIndex - recipesPage;
  const showRecipes = recipes.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(recipes?.length / recipesPage);

  //agarra el indice del primero y del ultimo pj

  //
  if (!recipes.length) {
    return (
      <div>
        <Empty />
      </div>
    );
  } else {
    return (
      <div className={Style.recipeContainer}>
        {totalPages >= 2 && Array.isArray(showRecipes) && (
          <Pagination totalPages={totalPages} />
        )}

        <section className={Style.containerCards}>
          {showRecipes?.map((ele) => (
            <RecipeModel
              name={ele.name}
              image={ele.image}
              summary={ele.summary}
              key={ele.id}
              healthScore={ele.healthScore}
              diets={ele.diets}
              id={ele.id}
            />
          ))}
        </section>
      </div>
    );
  }
};
