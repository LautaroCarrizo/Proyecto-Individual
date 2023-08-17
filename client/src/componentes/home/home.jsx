import { useEffect, useState } from "react";
import "./home.css";
import React from "react";
import Cards from "../cards/cards";
import { getAllRecipes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import FiltersOrders from "../filters/filtersOrders";
import ErrorHandler from "../errors/error";

export default function Home() {
  const dispatch = useDispatch();

  const allRecipes = useSelector((state) => state.allRecipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesToShow, setRecipesToShow] = useState([]);
  const recipesPerPage = 9;
  const startIdx = (currentPage - 1) * recipesPerPage;
  const endIdx = startIdx + recipesPerPage;
  const maxPage = Math.ceil(allRecipes.alldata?.length  / recipesPerPage)



  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);
  
  useEffect(() => {
    setRecipesToShow(allRecipes.alldata?.slice(startIdx, endIdx));
  }, [currentPage, allRecipes.alldata]);

  const handleNextPage = () => {
    if(currentPage + 1 < maxPage + 1){
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const handlerFilterOrders = () => {
    setCurrentPage(1);
  };

  return (
    <div className="containerHome">
      <div className="contaienerFiltros">
        <FiltersOrders pageFiltersOrders={handlerFilterOrders} />
       <ErrorHandler/>
      </div>
      <div>
        <Cards recipes={recipesToShow} />
      </div>
      <div className="containerButtomHome">
      <div  className={currentPage === 1 ? "hidden" : "back"}><button onClick={handlePrevPage}> back </button> </div>  
     <div className= {currentPage === maxPage ? "hidden" : "next"}> <button   onClick={handleNextPage}> next </button></div> 
      </div>
    </div>
  );
}
