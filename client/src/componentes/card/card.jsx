import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getDetailSuccess, onClose } from "../../redux/actions";
import "./card.css";

function Card({recipeId}) {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  const [detailData, setDetail] = useState(null);

  useEffect(() => {
    dispatch(getDetailSuccess(recipeId));
  }, [dispatch, recipeId]);

  useEffect(() => {
    setDetail(detail);
  }, [detail]);

  const handleClose = () => {
    if (detailData) {
      dispatch(onClose(recipeId, detailData.recipes));
    }
  };

  return (
    <div className="containerCard">
      <div className="card">
        <h1 className="cardTitle">{detail && detail.title}</h1>
        <ul className="containerList">
          <li>{`ID: ${detail.id}`}</li>
          <li> {detail.image} </li>
          <li>{`Api socre: ${detail.spoonacularScore}`}</li>
          <li> {`Health score: ${detail.healthScore}`} </li>
          <li>
            {`Dish types: ${detail.dishTypes?.map((element, index) => (
              <span key={index}>{element}</span>
            ))}`}
          </li>
          <li>
            {`Diets: ${detail.diets?.map((element, index) => (
              <span key={index}>{element}</span>
            ))}`}
          </li>
          <li> {`Summary: ${detail.summary}`} </li>
          <li>
            {`Vegetarian Diet: ${
              detail.vegetarian ? detail.vegetarian : "no tiene esta dieta"
            }`}
          </li>
          <li>
            {`Vegan Diet: ${
              detail.vegan ? detail.vegan : "no tiene esta dieta"
            } `}
          </li>
          <li>
            {`Gluten-Free Diet ${
              detail.glutenFree ? detail.glutenFree : "no tiene esta dieta"
            }`}
          </li>
          <li>
            {`Dairy-Free Diet: ${
              detail.dairyFree ? detail.dairyFree : "no tiene esta dieta"
            }`}
          </li>
        </ul>
        <button onClick={handleClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default Card;
