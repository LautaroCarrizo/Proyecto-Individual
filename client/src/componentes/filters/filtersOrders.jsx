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

export default function FiltersOrders({pageFiltersOrders}) {
  const dispatch = useDispatch();
  const datosRecipes = useSelector((state) => state.datosRecipes);
  const allRecipes = useSelector((state) => state.allRecipes);
  const [showfilterDiet, setshowfilterDiet] = useState(false);
  const [showOrders, setShowOrders] = useState(false);


  const toggleFiltersDiets = () => {
    setshowfilterDiet(!showfilterDiet);
  };
  const toggleOrders = () => {
    setShowOrders(!showOrders);
  };
  const handleFilterDiets = (event) => {
    const diet = event.target.value;
    dispatch(filterByDiet(diet, datosRecipes));
    pageFiltersOrders()
  };
  const handleFilterRecipes = () => {
    dispatch(filterByRecipe(datosRecipes));
    pageFiltersOrders()
  };

  const handlerOrders = (event) => {
    const sortOrder = event.target.value;
    switch (sortOrder) {
      case "A":
        dispatch(orderByName("A", allRecipes));
        break;
      case "B":
        dispatch(orderByName("D", allRecipes));
        break;
      case "Mayor":
        dispatch(orderByHealth("Mayor", allRecipes));
        break;
      case "Menor":
        dispatch(orderByHealth("Menor", allRecipes));
        break;
      default:
        null;
        break;
    }
    pageFiltersOrders()
  };
  const handlerClear = () => {
    dispatch(clear(datosRecipes));
  };

  return (
    <div>
      <div className="containerFiltersOrders">
         <div className="containerBoxFilters"> 
          <button className="button1" onClick={toggleFiltersDiets}>Tipos de dietas</button>
          {showfilterDiet && (
            <div className="containerSlect2">
              <ul>
                <li>
                  <label htmlFor="dietSelect">Filtrar por dieta:</label>
                  <select id="dietSelect" onChange={handleFilterDiets}>
                    <option value="gluten free">gluten free</option>
                    <option value="primal">primal</option>
                    <option value="dairy free">dairy free</option>
                    <option value="paleolithic">paleolithic</option>
                    <option value="lacto ovo vegetarian">
                      lacto ovo vegetarian
                    </option>
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
          </div>
          <div className="containerBoxFilters">
          <button className="button1" onClick={handleFilterRecipes}>Tus Recetas</button>
          </div>
          <div className="containerBoxFilters">
          <button className="button1" onClick={toggleOrders}>Tipos de Ordenamientos</button>
          {showOrders && (
            <div className="containerSlect1">
              <ul>
                <li>
                  <label htmlFor="Orders">Ordenamientos : </label>
                  <select id="orderSelect" onChange={handlerOrders}>
                    <option value="A">Ascendente</option>
                    <option value="B">Descendente</option>
                    <option value="Mayor"> Health Score Mayor</option>
                    <option value="Menor"> Health Score Menor</option>
                  </select>
                </li>
              </ul>
            </div>
          )}
          </div> 
          </div>
         <div className="containerClear"><button onClick={handlerClear}>Limpiar Filtros</button> </div>
    </div>
  );
}
