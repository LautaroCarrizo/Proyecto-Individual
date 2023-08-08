import { useSelector } from "react-redux";
import "./cards.css";
import Card from "../card/cardd";

function Cards() {
  const allRecipes = useSelector((state) => state.allRecipes);
  //console.log("CARDSSSSS LLEGO!!", allRecipes)  
  return (
    <div className="conteinerCards">
      <div className="containerBox">
        {allRecipes.alldata?.map((recipe) => {
          return <Card recipe={recipe} key={recipe.id} />;
        })}
      </div>
    </div>
  );
}

export default Cards;
