import {
  REQUETS_ALL_RECIPES_SUCCESS,
  REQUETS_ALL_RECIPES_FAILURE,
  REQUETS_DETAIL_RECIPES_SUCCESS,
  REQUETS_DETAIL_RECIPES_FAILURE,
  SEARCH_BY_NAME_SUCCESS,
  SEARCH_BY_NAME_FAILURE,
  ORDER_BY_NAME_SUCCESS,
  ORDER_BY_NAME_FAILURE,
  ORDER_BY_HEALTH_SUCCESS,
  ORDER_BY_HEALTH_FAILURE,
  FILTER_BY_DIET_SUCCESS,
  FILTER_BY_DIET_FAILURE,
  FILTER_BY_RECIPE_SUCCESS,
  FILTER_BY_RECIPE_FAILURE,
  ON_CLOSE,
  CLEAR,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  POST_RECIPES_SUCCESS,
  POST_RECIPES_FAILURE,
} from "./actions";

const initialState = {
  allRecipes: [], //siempre rederizo este
  datosRecipes: [], // y en este aplico los filtros
  access: false,
  errors: {
    getAllRecipesError: null, 
    getDetailError: null, 
    searchByNameError: null, 
    orderByNameError: null, 
    orderByHealthError: null, 
    filterByDietError: null, 
    filterByRecipeError: null, 
    loginError: null, 
    registerError: null,
    postRecipeError: null, 
  },
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  console.log("GLOBAL ERROR NAME", state.errors);
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...state,
        access: action.payload,
        errors: { ...state.errors, loginError: null },
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, loginError: action.payload.message },
      };
    case LOG_OUT:
      return {
        ...state,
        access: false,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, registerError: action.payload.message },
      };
    case POST_RECIPES_SUCCESS:
      return {
        ...state,
      };
    case POST_RECIPES_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, postRecipeError: action.payload.postRecipeError },
      };
    case REQUETS_ALL_RECIPES_SUCCESS:
      return {
        ...state,
        allRecipes: action.payload,
        datosRecipes: action.payload,
        errors: { ...state.errors, getAllRecipesError: null },
      };
    case REQUETS_ALL_RECIPES_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, getAllRecipesError: action.payload },
      };

    case REQUETS_DETAIL_RECIPES_SUCCESS:
      return {
        ...state,
        allRecipes: action.payload,
        errors: { ...state.errors, getDetailError: null },
      };
    case REQUETS_DETAIL_RECIPES_FAILURE:
      return {
        ...state,
        errors: {
          ...state.errors,
          getDetailError: action.payload.getDetailError,
        },
      };
    case ON_CLOSE:
      return {
        ...state,
        allRecipes: action.payload,
      };
    case SEARCH_BY_NAME_SUCCESS:
      return {
        ...state,
        allRecipes: action.payload,
        errors: { ...state.errors, searchByNameError: null },
      };
    case SEARCH_BY_NAME_FAILURE:
      return {
        ...state,
        errors: {
          ...state.errors,
          searchByNameError: action.payload.searchByNameError.message,
        },
      };
    case ORDER_BY_NAME_SUCCESS:
      return {
        ...state,
        allRecipes: action.payload,
        errors: { ...state.errors, orderByNameError: null },
      };
    case ORDER_BY_NAME_FAILURE:
      return {
        ...state,
        errors: {
          ...state.errors,
          orderByNameError: action.payload.orderByNameError,
        },
      };
    case ORDER_BY_HEALTH_SUCCESS:
      return {
        ...state,
        allRecipes: action.payload,
        errors: { ...state.errors, orderByHealthError: null },
      };
    case ORDER_BY_HEALTH_FAILURE:
      return {
        ...state,
        errors: {
          ...state.errors,
          orderByHealthError: action.payload.orderByHealthError,
        },
      };
    case FILTER_BY_DIET_SUCCESS:
      return {
        ...state,
        allRecipes: action.payload,
        errors: { ...state.errors, filterByDietError: null },
      };
    case FILTER_BY_DIET_FAILURE:
      return {
        ...state,
        errors: {
          ...state.errors,
          filterByDietError: action.payload.filterByDietError,
        },
      };
    case FILTER_BY_RECIPE_SUCCESS:
      return {
        ...state,
        allRecipes: action.payload,
        errors: { ...state.errors, filterByRecipeError: null },
      };
    case FILTER_BY_RECIPE_FAILURE:
      return {
        ...state,
        errors: {
          ...state.errors,
          filterByRecipeError: action.payload.filterByRecipeError,
        },
      };
    case CLEAR:
      return {
        ...state,
        allRecipes: state.datosRecipes,
      };

    default:
      return state;
  }
};

export default rootReducer;
