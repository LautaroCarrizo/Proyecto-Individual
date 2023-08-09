import { useState } from "react";
import "./filterOrders.css";
import React from "react";
import {
  orderByName,
  orderByHealth,
  filterByDiet,
  filterByRecipe,
  clear,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function FiltersOrders() {

  const dispatch = useDispatch();
  const datosRecipes = useSelector((state) => state.datosRecipes);
  const allRecipes = useSelector((state) => state.allRecipes);
  const [showfilter, setShowFilter] = useState(false);
  const [showfilterDiet, setshowfilterDiet] = useState(false);

  const toggleFilters = () => {
    setShowFilter(!showfilter);
  };
  const toggleFiltersDiets = () => {
    setshowfilterDiet(!showfilterDiet);
  };
  const handleFilterDiets = (event) => {
    const diet = event.target.value;

   console.log(dispatch(filterByDiet(diet, datosRecipes)));
  };
  const handleFilterRecipes = () => {
    dispatch(filterByRecipe(datosRecipes));
  };
  const handleOrderByName = (order) => {
       dispatch(orderByName(order, allRecipes))
  };

  const handleOrderHealth = (order) => {
    dispatch(orderByHealth(order, allRecipes));
  };

  const handlerClear = () => {
    dispatch(clear(datosRecipes));
  };
  
  return (
    <div className="contaienerFiltros">
      <button onClick={toggleFilters}>Mostrar/Ocultar Filtros</button>
      {showfilter && (
        <div>
          <button onClick={toggleFiltersDiets}>Tipos de dietas</button>
          {showfilterDiet && (
            <div>
              <ul>
                <li>
                  <label htmlFor="dietSelect">Filtrar por dieta:</label>
                  <select id="dietSelect" onChange={handleFilterDiets}>
                    <option value="">Seleccione una dieta</option>
                    <option value="gluten free">gluten free</option>
                    <option value="primal">primal</option>
                    <option value="dairy free">dairy free</option>
                    <option value="paleolithic">paleolithic</option>
                    <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
                    <option value="vegan">vegan</option>
                    <option value="whole 30">whole 30</option>
                    <option value="ketogenic">ketogenic</option>
                    <option value="pescatarian">pescatarian</option>
                    <option value="fodmap friendly">fodmap friendly</option>
                  </select>
                </li>
              </ul>
            </div>
          )}
          <ul>
            <li>
              <button onClick={handleFilterRecipes}>Tus Recetas</button>
              <button onClick={() => handleOrderByName("A")}>Ascendente</button>
              <button onClick={() => handleOrderByName("D")}>
                Descendente
              </button>
              <button onClick={() => handleOrderHealth("Mayor")}>
                Health Score Mayor
              </button>
              <button onClick={() => handleOrderHealth("Menor")}>
                Health Score Menor
              </button>
            </li>
          </ul>
          <button onClick={handlerClear}>Limpiar Filtros</button>
        </div>
      )}
    </div>
  );
}
