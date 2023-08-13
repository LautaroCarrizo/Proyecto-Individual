import "./error.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors } from "../../redux/actions";
import { useEffect } from "react";

function ErrorHandler() {
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();

  const renderErrorMessages = () => {
    if (errors.getAllRecipesError) {
      return (
        <div>
          Error en la obtención de todas las recetas:{" "}
          {errors.getAllRecipesError}
        </div>
      );
    } else if (errors.getDetailError) {
      return (
        <div>
          Error al obtener los detalles de la receta: {errors.getDetailError}
        </div>
      );
    } else if (errors.searchByNameError) {
      return (
        <div>Error en la búsqueda por nombre: {errors.searchByNameError}</div>
      );
    } else if (errors.orderByNameError) {
      return <div>Error al ordenar por nombre: {errors.orderByNameError}</div>;
    } else if (errors.orderByHealthError) {
      return <div>Error al ordenar por salud: {errors.orderByHealthError}</div>;
    } else if (errors.filterByDietError) {
      return <div>Error al filtrar por dieta: {errors.filterByDietError}</div>;
    } else if (errors.filterByRecipeError) {
      return (
        <div>Error al filtrar por receta: {errors.filterByRecipeError}</div>
      );
    } else if (errors.loginError) {
      return <div>Error al iniciar sesión: {errors.loginError}</div>;
    } else if (errors.registerError) {
      return <div>Error al registrarse: {errors.registerError}</div>;
    } else if (errors.postRecipeError) {
      return <div>Error al guardar la receta: {errors.postRecipeError}</div>;
    } else {
      return null; // No hay errores
    }
  };

  useEffect(() => {
    if (
      errors.getAllRecipesError ||
      errors.getDetailError ||
      errors.searchByNameError ||
      errors.orderByNameError ||
      errors.orderByHealthError ||
      errors.filterByDietError ||
      errors.filterByRecipeError ||
      errors.loginError ||
      errors.registerError ||
      errors.postRecipeError
    ) {
      const timer = setTimeout(() => {
        dispatch(clearErrors());
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [
    dispatch,
    errors.getAllRecipesError,
    errors.getDetailError,
    errors.searchByNameError,
    errors.orderByNameError,
    errors.orderByHealthError,
    errors.filterByDietError,
    errors.filterByRecipeError,
    errors.loginError,
    errors.registerError,
    errors.postRecipeError,
  ]);

  return <div>{renderErrorMessages()}</div>;
}

export default ErrorHandler;
