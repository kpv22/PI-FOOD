import React from "react";
import { RecipeModel } from "./RecipeModel";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import { Pagination } from "../Pagination/Pagination.jsx";
import { useState } from "react";
import { Loading } from "../Empty/Loading";
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

  const [charactersPerPage, setCharactersPerPage] = useState(9); //cuantas recetas x pagina
  const indexOfLastCharacter = currentPage * charactersPerPage; //pagina x cantidad  recetas en pagina
  // const firstPostIndex = currentPage - charactersPerPage; //indice del ultimo pj
  const indexOfFirsChararacter = indexOfLastCharacter - charactersPerPage;

  const currentCharacters = recipes.slice(
    indexOfFirsChararacter,
    indexOfLastCharacter
  );

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
      <div>
        <Pagination
          charactersPerPage={charactersPerPage}
          recipes={recipes.length}
        />

        <section className={Style.containerCards}>
          {currentCharacters?.map((ele) => (
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
