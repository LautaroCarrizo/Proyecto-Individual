import {  useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onClose,getDetailRecipes } from "../../redux/actions";
import "./cardd.css";
import React from "react";

function Card(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const allRecipes = useSelector((state) => state.allRecipes);
  const { id, name, image, diets } = props.recipe;
  const {alldata} = allRecipes
  
  const handleClose = () => {
      dispatch(onClose(id, alldata));
  };
  const handlerDetail = () => {
    dispatch(getDetailRecipes(id))
    navigate(`/detail/${id}`)
  }

  return (
    <div className="card">
      <h1>{name}</h1>
      <button onClick={handlerDetail}>Detalles</button>
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
