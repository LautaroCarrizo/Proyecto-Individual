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
    <div onClick={handlerDetail} className="card">
      <img src={image}></img>
      <h1>{name}</h1>
      <ul className="containerList">
        <li>
          Diets:
          {diets?.map((element, index) => {
            return <span key={index}>{` ${element} - `}</span>;
          })}
        </li>
      </ul>
    <div className="onclose">  <button onClick={(event) => { event.stopPropagation(); handleClose(); }}>Cerrar</button></div> 
    </div>
  );
}

export default Card;
