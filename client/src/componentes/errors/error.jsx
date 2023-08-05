

import {useSelector} from "@reduxjs/toolkit";


function ErrorHandler () {

const errors = useSelector((state) => state.errors)
const renderErrorMessages = () => {
    if (errors.getAllRecipesError) {
        return <div>Error en la obtención de todas las recetas: {errors.getAllRecipesError}</div>;
      } else if (errors.getDetailError) {
        return <div>Error al obtener los detalles de la receta: {errors.getDetailError}</div>;
      } else if (errors.searchByNameError) {
        return <div>Error en la búsqueda por nombre: {errors.searchByNameError}</div>;
      } else if (errors.orderByNameError) {
        return <div>Error al ordenar por nombre: {errors.orderByNameError}</div>;
      } else if (errors.orderByHealthError) {
        return <div>Error al ordenar por salud: {errors.orderByHealthError}</div>;
      } else if (errors.filterByDietError) {
        return <div>Error al filtrar por dieta: {errors.filterByDietError}</div>;
      } else if (errors.filterByRecipeError) {
        return <div>Error al filtrar por receta: {errors.filterByRecipeError}</div>;
      } else {
        return null; // No hay errores
      }
}
 return (
    <div>{renderErrorMessages()}</div>
 )
}

export default ErrorHandler