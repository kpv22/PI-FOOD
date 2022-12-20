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
export const FILTER_RECIPE = "FILTER_RECIPE";

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

    case FILTER_RECIPE:
      //creo un array con todos los pokemons
      let filterRecipes = state.recipes;
      // console.log(filterRecipes);
      // creo un array vacio para guardar los pokemons filtrados
      let createdFilter = [];

      // si el payload es igual a "Create", guardo en el array creadoFilter los pokemons que fueron creados en la base de datos
      if (action.payload === "Created") {
        createdFilter = filterRecipes.filter((p) => p.createdInDb);
      }
      console.log(createdFilter);
      // si el payload es igual a "apiCreate", guardo en el array creadoFilter los pokemons que fueron creados en la api

      if (action.payload === "apiCreate") {
        createdFilter = filterRecipes.filter((p) => !p.createdInDb);
      }

      console.log(createdFilter);
      // si el payload es igual a "all", guardo en el array creadoFilter todos los pokemons
      return {
        ...state,
        // retorno el array con los pokemons filtrados, o todos los pokemons si el payload es igual a "all"
        recipeCopy: action.payload === "all" ? filterRecipes : createdFilter,
      };

    // case FILTER_POKE:
    //   //creo un array con todos los pokemons
    //   let allPokes = state.filteredPoke;

    //   // creo un array vacio para guardar los pokemons filtrados
    //   let createdFilter = [];
    //   console.log(allPokes);
    //   // si el payload es igual a "weCreate", guardo en el array creadoFilter los pokemons que fueron creados en la base de datos
    //   if (action.payload === "weCreate") {
    //     createdFilter = allPokes.filter((p) => p.createdInDb);
    //   }

    //   // si el payload es igual a "apiCreate", guardo en el array creadoFilter los pokemons que fueron creados en la api
    //   console.log(allPokes);
    //   if (action.payload === "apiCreate") {
    //     createdFilter = allPokes.filter((p) => !p.createdInDb);
    //   }
    //   // si el payload es igual a "all", guardo en el array creadoFilter todos los pokemons
    //   return {
    //     ...state,
    //     // retorno el array con los pokemons filtrados, o todos los pokemons si el payload es igual a "all"
    //     pokemonCopy: action.payload === "all" ? allPokes : createdFilter,
    //   };

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
