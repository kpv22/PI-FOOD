import React from "react";
import { RecipeModel } from "./RecipeModel";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import Pagination from "../Pagination/Pagination.jsx";
import { useState } from "react";
import { Empty } from "../Empty/Empty";
import Style from "./Recipe.module.css";
import { Loading } from "../Empty/Loading";

export const Recipe = (props) => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const [loading, setLoading] = useState(true);

  // React.useEffect(() => {
  //   dispatch(actions.getRecipes());
  // }, []);
  React.useEffect(() => {
    dispatch(actions.getRecipes());
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const currentPage = useSelector((state) => state.currentPage);

  const recipesPage = 9;
  const lastIndex = currentPage * recipesPage;
  const firstIndex = lastIndex - recipesPage;
  const showRecipes = recipes.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(recipes?.length / recipesPage);

  // se calculan los índices de inicio y fin de la lista de recetas que se deben mostrar en la página actual. Para hacer esto, se multiplica el número de página actual por recipesPage para obtener el índice del último elemento que se debe mostrar en la página, y se resta recipesPage al índice del último elemento para obtener el índice del primer elemento.

  //agarra el indice del primero y del ultimo pj

  //
  // if (!recipes.length) {
  //   return (
  //     <div>
  //       <Empty />
  //     </div>
  //   );
  // } else {
  return (
    <div className={Style.recipeContainer}>
      {totalPages >= 2 && Array.isArray(showRecipes) && (
        <Pagination totalPages={totalPages} />

        // renderiza Pagination si el número total de páginas es mayor o igual a 2 y showRecipes es un array válido. El componente Pagination se encarga de mostrar la barra de paginación que permite al usuario navegar entre diferentes páginas de la lista.
      )}
      {/* estado local llamado loading, que se usa para determinar si se debe
      mostrar un mensaje de carga mientras se espera a que se obtengan las
      recetas. Si loading es true, el componente muestra un componente Loading;
      de lo contrario, si showRecipes es un array vacío, muestra un componente
      `Empty */}
      {!loading ? (
        !recipes.length ? (
          <Empty />
        ) : (
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
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};
// };
