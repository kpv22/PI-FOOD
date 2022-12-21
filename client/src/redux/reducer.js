export const GET_RECIPES = "ADD_RECIPE";
export const SEARCH_NAME = "SEARCH_NAME";
export const GET_DIETS = "GET_DIETS";
export const FILTER_DIETS = "FILTER_DIETS";
export const ORDER_BY_LETTER = "ORDER_BY_LETTER";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const HEALTH_SCORE = "HEALTH_SCORE";
export const POST_RECIPE = "POST_RECIPE";
export const RECIPE_ID = "RECIPE_ID";
export const CLEARID = "CLEARID";
export const SET_PAGES = "SET_PAGES";
// export const FILTER_RECIPE = "FILTER_RECIPE";
export const FILTER_CREATED = "FILTER_CREATED";

const initialState = {
  recipes: [true],
  //para que no se mezcle el loading con el empty
  searchRecipe: [],
  dietas: [],
  recipeId: [],
  // loading:false,
  currentPage: 1,
  filterRecipe: [],
  recipeCopy: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        recipeCopy: action.payload,
        searchRecipe: action.payload,
        // currentPage: 1,
      };
    ////////////////////////////////////////////////////////////////////////////
    case SEARCH_NAME:
      return {
        ...state,
        recipes: action.payload,
        currentPage: 1,
      };

    ////////////////////////////////////////////////////////////////////////////
    case GET_DIETS:
      return {
        ...state,
        dietas: action.payload,
      };

    ////////////////////////////////////////////////////////////////////////////
    case FILTER_DIETS:
      const filterByDiets = state.recipes.filter((element) =>
        element.diets.includes(action.payload) ? element : null
      );

      return {
        ...state,
        recipes: filterByDiets,
      };

    /////////////////////////////////////////////////////////////////////////////
    case ORDER_BY_LETTER:
      const sortedLetter =
        action.payload === "A-Z"
          ? state.recipes.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: sortedLetter,
        currentPage: 2,
      };

    ////////////////////////////////////////////////////////////////////////////
    case HEALTH_SCORE:
      const allRecipes = [...state.recipes];
      const orderByHs =
        action.payload === "max"
          ? allRecipes.sort((a, b) => {
              if (a.healthScore < b.healthScore) return 1;
              if (a.healthScore > b.healthScore) return -1;
              return 0;
            })
          : allRecipes.sort((a, b) => {
              if (a.healthScore > b.healthScore) return 1;
              if (a.healthScore < b.healthScore) return -1;
              return 0;
            });

      return {
        ...state,
        recipes: orderByHs,
        currentPage: 2,
      };

    ////////////////////////////////////////////////////////////////////////////

    //    Parece que en tu código estás usando la variable filtRecipes para almacenar las recetas filtradas en el caso en que se seleccione "database" en el filtro. Sin embargo, al final de la función estás asignando el valor de createdFiltered a la propiedad recipes del estado, lo que sobreescribe el valor original de filtRecipes.

    // Una posible solución sería almacenar el valor original de filtRecipes en una variable diferente, por ejemplo originalRecipes, y usar esta variable para restaurar el estado original cuando se seleccione "api" en el filtro.Algo así:
    //       Me disculpo por el error en mi respuesta anterior. Al revisar de nuevo tu código, veo que estás usando la variable filtRecipes para almacenar las recetas originales y la variable copyRecipes para almacenar una copia de las recetas originales.

    // Una forma de solucionar tu problema sería usar la variable copyRecipes para restaurar el estado original de recipes cuando se seleccione "api" en el filtro, en lugar de usar filtRecipes. Algo así:

    case FILTER_CREATED:
      const copyRecipes = state.recipeCopy;
      let filtRecipes = state.recipes;

      console.log(filtRecipes);
      let createdFiltered =
        action.payload === "api"
          ? copyRecipes
          : action.payload === "database"
          ? filtRecipes.filter((el) => el.id.length > 6)
          : filtRecipes.filter((el) => el.id.toString().length < 6);
      if (!createdFiltered.length) {
        alert("No recipes created yet");
        createdFiltered = filtRecipes;
      }
      return {
        ...state,
        recipes: createdFiltered,
        currentPage: 2,
      };

    ///////////////////////////////////////////////////////////////////////

    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    ////////////este es del paginado nuevo!!///////////////////////////////
    case SET_PAGES: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    ////////////////////////////////////////////////////////////////////

    case POST_RECIPE:
      return {
        ...state,
        currentPage: 1,
      };

    /////////////////////////////////////////////////////////////////////
    case RECIPE_ID:
      return {
        ...state,
        recipeId: action.payload,
      };
    /////////////////////////////////////////////////////////////////////
    case CLEARID:
      return {
        ...state,
        recipeId: [],
      };
    /////////////////////////////////////////////////////////////////////

    default:
      return { ...state };
  }
}

export default rootReducer;
