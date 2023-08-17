import axios from "axios";

//? ACTIONS TYPES;

export const REQUETS_ALL_RECIPES_SUCCESS = "REQUETS_ALL_RECIPES_SUCCESS";
export const REQUETS_ALL_RECIPES_FAILURE = "REQUETS_ALL_RECIPES_FAILURE";
export const REQUETS_DETAIL_RECIPES_SUCCESS = "REQUETS_DETAIL_RECIPES_SUCCESS";
export const REQUETS_DETAIL_RECIPES_FAILURE = "REQUETS_DETAIL_RECIPES_FAILURE";
export const SEARCH_BY_NAME_SUCCESS = "SEARCH_BY_NAME_SUCCESS";
export const SEARCH_BY_NAME_FAILURE = "SEARCH_BY_NAME_FAILURE";
export const ON_CLOSE = "ON_CLOSE";
export const ORDER_BY_NAME_SUCCESS = "ORDER_BY_NAME_SUCCESS";
export const ORDER_BY_NAME_FAILURE = "ORDER_BY_NAME_FAILURE";
export const ORDER_BY_HEALTH_SUCCESS = "ORDER_BY_HEALTH_SUCCESS";
export const ORDER_BY_HEALTH_FAILURE = "ORDER_BY_HEALTH_FAILURE";
export const FILTER_BY_DIET_SUCCESS = "FILTER_BY_DIET_SUCCESS";
export const FILTER_BY_DIET_FAILURE = "FILTER_BY_DIET_FAILURE";
export const FILTER_BY_RECIPE_SUCCESS = "FILTER_BY_RECIPE_SUCCESS";
export const FILTER_BY_RECIPE_FAILURE = "FILTER_BY_RECIPE_FAILURE";
export const POST_RECIPES_SUCCESS = "POST_RECIPES_SUCCESS";
export const POST_RECIPES_FAILURE = "POST_RECIPES_FAILURE";
export const CLEAR = "CLEAR";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_OUT = "LOG_OUT";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const CLEAR_MESSAGES = "CLEAR_MESSAGES";
//? ACTIONS

export const getAllRecipes = () => {
  return async (dispatch) => {
    try {
      const endpoint = `http://localhost:3001/`;
      const response = await axios.get(endpoint);
      const allRecipes = response.data;
      dispatch(getAllRecipesSuccess(allRecipes));
    } catch (error) {
      dispatch(getAllRecipesFailure(error.message));
    }
  };
};
export const getAllRecipesSuccess = (recipes) => {
  return { type: REQUETS_ALL_RECIPES_SUCCESS, payload: recipes };
};
export const getAllRecipesFailure = (error) => {
  return { type: REQUETS_ALL_RECIPES_FAILURE, payload: error };
};
export const getDetailRecipes = (id) => {
  return async (dispatch) => {
    try {
      const endpoint = `http://localhost:3001/recipes/${id}`;
      const response = await axios.get(endpoint);
      const detail = response.data;
      dispatch(getDetailSuccess(detail));
    } catch (error) {
      dispatch(getDetailFailure(error.message));
    }
  };
};
export const getDetailSuccess = (detail) => {
  return { type: REQUETS_DETAIL_RECIPES_SUCCESS, payload: detail };
};
export const getDetailFailure = (error) => {
  return {
    type: REQUETS_DETAIL_RECIPES_FAILURE,
    payload: { getDetailError: error },
  };
};
export const searchByName = (name) => {
  return async (dispatch) => {
    try {
      const endpoint = `http://localhost:3001/recipes?name=${name}`;
      const response = await axios.get(endpoint);
      const recipesData = response.data;
      dispatch(searchByNameSuccess(recipesData));
    } catch (error) {
      dispatch(searchByNameFailure(error.response.data));
    }
  };
};
export const searchByNameSuccess = (recipesData) => {
  return { type: SEARCH_BY_NAME_SUCCESS, payload: recipesData };
};
export const searchByNameFailure = (error) => {
  return {
    type: SEARCH_BY_NAME_FAILURE,
    payload: { searchByNameError: error },
  };
};

export const onClose = (id, recipes) => {
  const endpoint = "http://localhost:3001/onclose";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, { id, recipes });
      return dispatch({
        type: ON_CLOSE,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const postRecipeAction = (dataRecipe) => {
  return async (dispatch) => {
    try {
      const endpoint = `http://localhost:3001/recipes`;
      const response = await axios.post(endpoint, dataRecipe);
      const message = response.data;
      dispatch(postRecipesSuccess(message));
    } catch (error) {
      dispatch(postRecipesFailure(error.message));
    }
  };
};

export const postRecipesSuccess = (message) => {
  return { type: POST_RECIPES_SUCCESS, payload: message };
};
export const postRecipesFailure = (error) => {
  return { type: POST_RECIPES_FAILURE, payload: { postRecipeError: error } };
};

export const orderByName = (order, allRecipes) => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/order";
      const { data } = await axios.post(endpoint, { order, allRecipes });
      const orderName = data;
      dispatch(orderByNameSuccess(orderName));
    } catch (error) {
      dispatch(orderByNameFailure(error.message));
    }
  };
};
export const orderByNameSuccess = (orderName) => {
  return { type: ORDER_BY_NAME_SUCCESS, payload: orderName };
};
export const orderByNameFailure = (error) => {
  return { type: ORDER_BY_NAME_FAILURE, payload: { orderByNameError: error } };
};
export const orderByHealth = (order, allRecipes) => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/healthscore";
      const { data } = await axios.post(endpoint, { order, allRecipes });
      const orderHealth = data;
      dispatch(orderByHealthSuccess(orderHealth));
    } catch (error) {
      dispatch(orderByHealthFailure(error.message));
    }
  };
};
export const orderByHealthSuccess = (orderHealth) => {
  return { type: ORDER_BY_HEALTH_SUCCESS, payload: orderHealth };
};
export const orderByHealthFailure = (error) => {
  return {
    type: ORDER_BY_HEALTH_FAILURE,
    payload: { orderByHealthError: error },
  };
};
export const filterByDiet = (nameDiet, datosRecipes) => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/filter/diets";
      const { data } = await axios.post(endpoint, { nameDiet, datosRecipes });
      const filterDiet = data;
      dispatch(filterByDietSuccess(filterDiet));
    } catch (error) {
      dispatch(filterByDietFailure(error.message));
    }
  };
};
export const filterByDietSuccess = (filterDiet) => {
  return { type: FILTER_BY_DIET_SUCCESS, payload: filterDiet };
};
export const filterByDietFailure = (error) => {
  return {
    type: FILTER_BY_DIET_FAILURE,
    payload: { filterByDietError: error },
  };
};

export const filterByRecipe = (datosRecipes) => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/filter/recipes";
      const { data } = await axios.post(endpoint, { datosRecipes });
      const filterRecipes = data.alldata;
      dispatch(filterByRecipeSuccess(filterRecipes));
    } catch (error) {
      dispatch(filterByRecipeFailure(error.message));
    }
  };
};

export const filterByRecipeSuccess = (filterRecipes) => {
  return {
    type: FILTER_BY_RECIPE_SUCCESS,
    payload: { alldata: filterRecipes },
  };
};
export const filterByRecipeFailure = (error) => {
  return {
    type: FILTER_BY_RECIPE_FAILURE,
    payload: { filterByRecipeError: error },
  };
};
export const clear = () => {
  return { type: CLEAR };
};

export const register = (userData) => {
  const { email, password } = userData;
  return async (dispatch) => {
    try {
      const URL = "http://localhost:3001/register";
      const endpoint = URL;
      const { data } = await axios.post(endpoint, { email, password });
      const { message } = data;
      dispatch(registerSuccess(message));
    } catch (error) {
      dispatch(registerFailure(error));
    }
  };
};
export const registerSuccess = (message) => {
  return { type: REGISTER_SUCCESS, payload: message };
};
export const registerFailure = (error) => {
  return { type: REGISTER_FAILURE, payload: error };
};
export const login = (userData) => {
  const { email, password } = userData;
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/login";
      const { data } = await axios.post(endpoint, { email, password });
      const { acc } = data;
      dispatch(loginSucces(acc));
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
};

export const loginSucces = (access) => {
  return { type: LOG_IN_SUCCESS, payload: access };
};
export const loginFailure = (error) => {
  return { type: LOG_IN_FAILURE, payload: error };
};

export const logout = () => {
  return { type: LOG_OUT };
};

export const clearMessages = () => {
  return { type: CLEAR_MESSAGES };
};
export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
