import { useEffect, useState } from "react";
import "./home.css";
import React from "react";
import Cards from "../cards/cards";
import {
  getAllRecipes,
  orderByName,
  orderByHealth,
  filterByDiet,
  filterByRecipe,
  clear,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const allRecipes = useSelector((state) => state.allRecipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesToShow, setRecipesToShow] = useState([]);
  const [showfilter, setShowFilter] = useState(false);

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  useEffect(() => {
    const recipesPerPage = 9;
    const startIdx = (currentPage - 1) * recipesPerPage;
    const endIdx = startIdx + recipesPerPage;
    setRecipesToShow(allRecipes.alldata?.slice(startIdx, endIdx));
  }, [currentPage, allRecipes.alldata]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const toggleFilters = () => {
    setShowFilter(!showfilter);
  };

  const handleFilterDiets = (event) => {
    const diet = event.target.value;
    dispatch(filterByDiet(diet, allRecipes));
  };
  const handleFilterRecipes = () => {
    dispatch(filterByRecipe(allRecipes));
  };
  const handleOrderByName = (order) => {
    order === "A"
      ? dispatch(orderByName(order, allRecipes))
      : dispatch(orderByName(order, allRecipes));
  };

  const handleOrderHealth = (order) => {
    order === "Mayor"
      ? dispatch(orderByHealth(order, allRecipes))
      : dispatch(orderByHealth(order, allRecipes));
  };

  const handlerClear = () => {
    dispatch(clear());
  };

  return (
    <div className="containerHome">
      <div className="containerTitulo">
        <h1>Recipes</h1>
      </div>
      <div className="contaienerFiltros">
        <button onClick={toggleFilters}>Mostrar/Ocultar Filtros</button>
        {showfilter && (
          <div>
            <ul>
              <input
                type="text"
                placeholder="buscar dieta.."
                onChange={handleFilterDiets}
              />
              <button onClick={handleFilterRecipes}>Tus Recetas</button>
            </ul>
            <ul>
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
            </ul>
            <button onClick={handlerClear}>Limpiar Filtros</button>
          </div>
        )}
      </div>

      <div>
        <Cards recipes={recipesToShow} />
      </div>

      <button onClick={handlePrevPage}> Retroceder </button>
      <button onClick={handleNextPage}> Avanzar </button>
    </div>
  );
}
