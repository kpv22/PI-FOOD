import axios from "axios";
import {
  GET_RECIPES,
  SEARCH_NAME,
  GET_DIETS,
  FILTER_DIETS,
  ORDER_BY_LETTER,
  CHANGE_PAGE,
  HEALTH_SCORE,
  RECIPE_ID,
  CLEARID,
  SET_PAGES,
  FILTER_CREATED,
  DELETE_RECIPE,
  BURGER,
} from "./reducer";

export const getRecipes = () => {
  return async (dispatch) => {
    let pedidoApi = await axios.get(`/recipes`);
    dispatch({ type: GET_RECIPES, payload: pedidoApi.data });
  };
};

export const searchName = (name) => {
  return async (dispatch) => {
    let pedidoApi = await axios.get(`/recipes/?name=${name}`);
    dispatch({ type: SEARCH_NAME, payload: pedidoApi.data });
  };
};

export const getDiets = () => {
  return async (dispatch) => {
    let pedidoApi = await axios.get(`/diets`);
    dispatch({ type: GET_DIETS, payload: pedidoApi.data });
  };
};

export const RecipeID = (id) => {
  return async (dispatch) => {
    let receta = await axios.get(`/recipes/${id}`);
    return dispatch({ type: RECIPE_ID, payload: receta.data });
  };
};

export const filterByDiets = (payload) => {
  return {
    type: FILTER_DIETS,
    payload: payload,
  };
};

export const orderByLetter = (payload) => {
  return {
    type: ORDER_BY_LETTER,
    payload,
  };
};

export const change_page = (Pagenumber) => {
  return {
    type: CHANGE_PAGE,
    payload: Pagenumber++,
  };
};

export const orderByHs = (payload) => {
  return {
    type: HEALTH_SCORE,
    payload,
  };
};

export const ClearId = () => {
  return {
    type: CLEARID,
  };
};
export const Burger = (payload) => {
  return {
    type: BURGER,
    payload,
  };
};

export const postRecipes = (payload) => {
  return async function () {
    const postRecipe = await axios.post("/recipes", payload);
    return postRecipe;
  };
};
export const setPage = (payload) => {
  return {
    type: SET_PAGES,
    payload,
  };
};

export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  };
};

///////////////////////////////////////////////////////

export const deleteRecipe = (id) => {
  return async function (dispatch) {
    const selectRecipe = await axios.delete("/recipes/" + id);
    return dispatch({
      type: DELETE_RECIPE,
      payload: selectRecipe,
    });
  };
};

/////////////////////////////////////////////////////

// export const updateRecipe = (id, payload) => {
//   return async function (dispatch) {
//     await axios.put("http://localhost:3001/recipes/" + id, payload);
//     return dispatch({
//       type: UPDATE_RECIPE,
//     });
//   };
// };

export const update = (id, payload) => {
  return async function () {
    const UPDATE = await axios.put("/recipes/" + id, payload);
    return UPDATE;
  };
};
