import {  useDispatch, useSelector } from "react-redux";
import { onClose } from "../../redux/actions";
import "./cardd.css";
import React from "react";

function Card(props) {
  const dispatch = useDispatch()
  const {setPrueba, prueba} = props
  const allRecipes = useSelector((state) => state.allRecipes);
  const { id, name, image, diets } = props.recipe;
  const {alldata} = allRecipes
  const handleClose = () => {
     setPrueba(!prueba)
      dispatch(onClose(id, alldata));
  };

  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={image}></img>
      <ul className="containerList">
        <li>
          Diets:
          {diets?.map((element, index) => {
            return <span key={index}>{` ${element} - `}</span>;
          })}
        </li>
      </ul>
      <button onClick={handleClose}>Cerrar</button>
    </div>
  );
}

export default Card;
