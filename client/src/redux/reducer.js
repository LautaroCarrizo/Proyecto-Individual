import {
  REQUETS_ALL_RECIPES_SUCCESS,
  REQUETS_ALL_RECIPES_FAILURE,
} from "./actions";
import {
  REQUETS_DETAIL_RECIPES_SUCCESS,
  REQUETS_DETAIL_RECIPES_FAILURE,
} from "./actions";
import { SEARCH_BY_NAME_SUCCES, SEARCH_BY_NAME_FAILURE } from "./actions";
import { ORDER_BY_NAME_SUCCES, ORDER_BY_NAME_FAILURE } from "./actions";
import { ORDER_BY_HEALTH_SUCCES, ORDER_BY_HEALTH_FAILURE } from "./actions";
import { FILTER_BY_DIET_SUCCES, FILTER_BY_DIET_FAILURE } from "./actions";
import { FILTER_BY_RECIPE_SUCCES, FILTER_BY_RECIPE_FAILURE } from "./actions";
import { ON_CLOSE, CLEAR } from "./actions";

const initialState = {
  allRecipes: [],
  detail: null,
  errors: {
    getAllRecipesError: null,
    getDetailError: null,
    searchByNameError: null,
    orderByNameError: null,
    orderByHealthError: null,
    filterByDietError: null,
    filterByRecipeError: null,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUETS_ALL_RECIPES_SUCCESS:
      return {
        ...state,
        allRecipes: action.payload,
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
    case SEARCH_BY_NAME_SUCCES:
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
    case ORDER_BY_NAME_SUCCES:
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
    case ORDER_BY_HEALTH_SUCCES:
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
    case FILTER_BY_DIET_SUCCES:
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
    case FILTER_BY_RECIPE_SUCCES:
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
    case ON_CLOSE:
      return {
        ...state,
        allRecipes: action.payload,
      };
    case CLEAR:
      return initialState;

    default:
      return state;
  }
};

export default rootReducer;
