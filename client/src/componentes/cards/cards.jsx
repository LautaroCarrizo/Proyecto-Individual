import "./cards.css";
import Card from "../card/cardd";

function Cards(props) {
  const {recipes} = props
  return (
    <div className="conteinerCards">
      <div className="containerBox">
        {recipes?.map((recipe) => {
          return <Card recipe={recipe} key={recipe.id} />;
        })}
      </div>
    </div>
  );
}

export default Cards;
