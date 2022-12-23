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
export const DELETE_RECIPE = "DELETE_RECIPE";

// export const FILTER_RECIPE = "FILTER_RECIPE";
export const FILTER_CREATED = "FILTER_CREATED";

const initialState = {
  recipes: [true],
  searchRecipe: [],
  dietas: [],
  recipeId: [],
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

    ///////////////////////La función localeCompare() se utiliza para comparar dos strings en JavaScript y devuelve un valor numérico que indica si el string que se está comparando es mayor (-1), menor (1) o igual (0) al string con el que se está comparando. En este caso, estamos utilizando el valor de retorno de localeCompare() para determinar el orden en el que deben aparecer los elementos en la lista.////////////////////////////////

    case ORDER_BY_LETTER:
      const allRecipe = [...state.recipes];
      const sortedLetter = allRecipe.sort((a, b) => {
        if (action.payload === "A-Z") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      return {
        ...state,
        recipes: sortedLetter,
        currentPage: 2,
      };

    ////////////////////////////////////////////////////////////////////////////

    case HEALTH_SCORE:
      let allRecipes = [...state.recipes]; // hacer una copia del array de recetas
      let orderByHs; // Declarar una variable para almacenar la array ordenada
      if (action.payload === "max") {
        // si el payload is "max", ordene la array en orden descendente
        orderByHs = allRecipes.sort((a, b) => b.healthScore - a.healthScore);
      } else {
        // si el payload no es "max", ordene la array en orden ascendente
        orderByHs = allRecipes.sort((a, b) => a.healthScore - b.healthScore);
      }
      return {
        ...state,
        recipes: orderByHs, //actualice la array de recetas con la array ordenada
        currentPage: 2, // actualice a la pagina 2
      };
    ////////////////////////////////////////////////////////////////////////////

    // la variable filtRecipes para almacenar las recetas originales y la variable copyRecipes para almacenar una copia de las recetas originales.

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

    case DELETE_RECIPE:
      return {
        ...state,
        recipeCopy: state.recipeCopy.filter((r) => r !== action.payload),
      };

    //////////////////////////////////////////////////////

    default:
      return { ...state };
  }
}

export default rootReducer;
