import { useSelector } from "react-redux";
import "./cards.css";
import React, { useState } from "react";
import Card from "../card/cardd";

function Cards() {
  const allRecipes = useSelector((state) => state.allRecipes);
  const [prueba, setPrueba] = useState(false)
  return (
    <div className="conteinerCards">
    <div className="containerBox">
  {allRecipes.alldata?.map((recipe) => 
   <Card recipe = {recipe} key={recipe.id} setPrueba= {setPrueba} prueba= {prueba} />
  )}
    </div>
  </div>      
  );
}

export default Cards;
