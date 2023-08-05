import { useSelector } from "react-redux";
import "./cards.css";
import Card from "../card/card";

function Cards() {
  const allRecipes = useSelector((state) => state.allRecipes);
 const {alldata} = allRecipes
  return (
    <div className="conteinerCards">
    <div className="containerBox">
      {alldata?.map((recipe) => {
       <Card recipeId={recipe.id} key={recipe.id} />;
      })}
    </div>
  </div>      
  );
}

export default Cards;
