import { useEffect, useState } from "react";
import "./home.css";
import React from "react";
import Cards from "../cards/cards";
import { getAllRecipes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import FiltersOrders from "../filters/filtersOrders";

export default function Home() {
  const dispatch = useDispatch();

  const allRecipes = useSelector((state) => state.allRecipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesToShow, setRecipesToShow] = useState([]);

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

  return (
    <div className="containerHome">
      <div className="containerTitulo">
        <h1>Recipes</h1>
        <div>
        <FiltersOrders/>
        </div>
      </div>
      <div>
        <Cards recipes={recipesToShow} />
      </div>
      <button onClick={handlePrevPage}> Retroceder </button>
      <button onClick={handleNextPage}> Avanzar </button>
    </div>
  );
}
