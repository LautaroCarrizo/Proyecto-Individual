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
          <p className="errorsMessages">
            {" "}
            Error en la obtención de todas las recetas:{" "}
            {errors.getAllRecipesError}
          </p>
        </div>
      );
    } else if (errors.getDetailError) {
      return (
        <div>
          <p className="errorsMessages">
            Error al obtener los detalles de la receta: {errors.getDetailError}{" "}
          </p>
        </div>
      );
    } else if (errors.searchByNameError) {
      return (
        <div>
          <p className="errorsMessages">
            Error en la búsqueda por nombre: {errors.searchByNameError}
          </p>{" "}
        </div>
      );
    } else if (errors.orderByNameError) {
      return (
        <div>
          <p className="errorsMessages">
            Error al ordenar por nombre: {errors.orderByNameError}
          </p>{" "}
        </div>
      );
    } else if (errors.orderByHealthError) {
      return (
        <div>
          <p className="errorsMessages">
            Error al ordenar por salud: {errors.orderByHealthError}{" "}
          </p>
        </div>
      );
    } else if (errors.filterByDietError) {
      return (
        <div>
          <p className="errorsMessages">
            Error al filtrar por dieta: {errors.filterByDietError}{" "}
          </p>
        </div>
      );
    } else if (errors.filterByRecipeError) {
      return (
        <div>
          <p className="errorsMessages">
            {" "}
            Error al filtrar por receta: {errors.filterByRecipeError}
          </p>
        </div>
      );
    } else if (errors.loginError) {
      return (
        <div>
          <p className="errorsMessages">
            Error al iniciar sesión: {errors.loginError}
          </p>
        </div>
      );
    } else if (errors.registerError) {
      return (
        <div>
          {" "}
          <p className="errorsMessages">
            Error al registrarse: {errors.registerError}
          </p>
        </div>
      );
    } else if (errors.postRecipeError) {
      return (
        <div>
          <p className="errorsMessages">
            Error al guardar la receta: {errors.postRecipeError}
          </p>
        </div>
      );
    } else {
      return null; 
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
