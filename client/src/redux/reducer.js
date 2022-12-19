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
// export const CHANGE_STATE = "CHANGE_STATE";

const initialState = {
  recipes: [true],
  //para que no se mezcle el loading con el empty
  searchRecipe: [],
  dietas: [],
  recipeId: [],
  // loading:false,
  currentPage: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        searchRecipe: action.payload,
        // currentPage: 1,
      };
    case SEARCH_NAME:
      return {
        ...state,
        recipes: action.payload,
        currentPage: 1,
      };
    case GET_DIETS:
      return {
        ...state,
        dietas: action.payload,
      };
    case FILTER_DIETS:
      const filterByDiets = state.recipes.filter((element) =>
        element.diets.includes(action.payload) ? element : null
      );

      return {
        ...state,
        recipes: filterByDiets,
      };
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

    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case POST_RECIPE:
      return {
        ...state,
        currentPage: 1,
      };

    case RECIPE_ID:
      return {
        ...state,
        recipeId: action.payload,
      };
    case CLEARID:
      return {
        ...state,
        recipeId: [],
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
