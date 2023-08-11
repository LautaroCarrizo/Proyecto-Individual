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
} from "./actions";

const initialState = {
  allRecipes: [], //siempre rederizo este
  datosRecipes: [], // y en este aplico los filtros
  errors: {
    getAllRecipesError: null,
    getDetailError: null,
    searchByNameError: null,
    orderByNameError: null,
    orderByHealthError: null,
    filterByDietError: null,
    filterByRecipeError: null,
    postRecipesError: null,
  },
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
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
        detail: action.payload,
        errors: { ...state.errors, getDetailError: null },
      };
    case REQUETS_DETAIL_RECIPES_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, getDetailError: action.payload },
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
        errors: { ...state.errors, searchByNameError: action.payload },
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
        errors: { ...state.errors, orderByNameError: action.payload },
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
        errors: { ...state.errors, orderByHealthError: action.payload },
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
        errors: { ...state.errors, filterByDietError: action.payload },
      };
    case  FILTER_BY_RECIPE_SUCCESS:
      return {
        ...state,
        allRecipes: action.payload,
        errors: { ...state.errors, filterByRecipeError: null },
      };
    case FILTER_BY_RECIPE_FAILURE:
      return {
        ...state,
        errors: { ...state.errors, filterByRecipeError: action.payload },
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
