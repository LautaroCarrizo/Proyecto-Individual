import { useEffect } from "react";
import "./home.css";
import React from "react";
import Cards from "../cards/cards";
import { getAllRecipes } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();


  useEffect(() => {
      dispatch(getAllRecipes());
  }, [dispatch]);
 

  return (
    <div className="containerHome">
      <div className="containerTitulo">
        <h1>Recipes</h1>
      </div>
      <div>
        <Cards  />
      </div>
    </div>
  );
}
