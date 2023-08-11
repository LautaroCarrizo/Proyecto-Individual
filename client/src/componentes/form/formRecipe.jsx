import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {postRecipeAction} from "../../redux/actions"
import validation from "./validationsForms";
import "./form.css";
export default function FormRecipe() {
  const dispatch = useDispatch()
  const [recipe, setRecipe] = useState({
    name: "",
    summary: "",
    healthScore: 0,
    steps: "",
    diets: [],
  });
  const [errors, setError] = useState([]);

  function handlerPost(event) {
    event.preventDefault();
    const validationErrors = validation(recipe);
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
       dispatch(postRecipeAction(recipe));
    }
  }

  function handleChange(event) {
    const {name, value} = event.target;
    let parsedValue = value
    if(name === "healthScore") {
      parsedValue = parseFloat(value)
    } else {
      parsedValue = value
    }
    const valueUpdate = { ...recipe, [name]: parsedValue }
    setRecipe(valueUpdate); 
    console.log(valueUpdate)
    setError(
      validation(valueUpdate)
      ); 
    }
  
    function handlerChangeDiets(event) {
      const { value } = event.target;
      const valueUpdate = recipe.diets.includes(value)
        ? { ...recipe, diets: recipe.diets.filter((d) => d !== value) }
        : { ...recipe, diets: [...recipe.diets, value] };
      setRecipe(valueUpdate);
      setError(validation(valueUpdate));
    }
  
  return (
    <div className="contarinerForm">
      <h1 className="tituloForm2 tituloInvertido">Crea tu propia Receta!</h1>
      <form className="form" onSubmit={handlerPost}>
        <div className="containerInput" id="2">
          <div className="inputBox">
            <label className="label">Recipe Name</label>
            <input
              className="textArea"
              name="name"
              onChange={handleChange}
              value={recipe.name}
              type="text"
              placeholder="recipe..."
            ></input>
            {errors.name ? (
              <span className="errors"> {errors.name} </span>
            ) : null}
          </div>
          <div className="inputBox">
            <label className="label">summary</label>
            <textarea
              className="textArea"
              name="summary"
              onChange={handleChange}
              value={recipe.summary}
              placeholder="summary..."
            ></textarea>
            {errors.summary ? (
              <span className="errors"> {errors.summary} </span>
            ) : null}
          </div>
          <div className="inputBox">
            <label className="label">Health Score</label>
            <input
              className="textArea"
              name="healthScore"
              onChange={handleChange}
              value={recipe.healthScore}
              type="number"
              min={0}
              max={100}
              placeholder="healthScore..."
            ></input>
            {errors.healthScore ? (
              <span className="errors"> {errors.healthScore} </span>
            ) : null}
          </div>
          <div className="inputBox">
            <label className="label">steps</label>
            <textarea
              className="textArea"
              name="steps"
              onChange={handleChange}
              value={recipe.steps}
              placeholder="steps..."
            ></textarea>
            {errors.steps ? (
              <span className="errors"> {errors.steps} </span>
            ) : null}
          </div>
          {/* <div className="inputBox"> //! VER COMO RENDERIZAR UNA IMAGEN RANDOM DE COMIDA
          <label className="label">IMG</label>
          <input  className="textArea" name="email" onChange={handleChange}  value= {recipe.summary} type="text" placeholder="email..."></input>
           {errors.username ? (<span className="errors"> {errors.username} </span>) : null}
          </div> */}
          <div className="inputBox">
            <label className="label">Diets</label>
            <select
              className="select"
              name="diets"
              onChange={handlerChangeDiets}
              value={recipe.diets}
              multiple
            >
              <option value="gluten free">Gluten Free</option>
              <option value="primal">Primal</option>
              <option value="dairy free">Dairy Free</option>
              <option value="paleolithic">Paleolithic</option>
              <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="whole 30">Whole 30</option>
              <option value="ketogenic">Ketogenic</option>
              <option value="pescatarian">Pescatarian</option>
              <option value="fodmap friendly">FODMAP Friendly</option>
            </select>
            {errors.diets ? (
              <span className="errors"> {errors.diets} </span>
            ) : null}
          </div>
           {errors.form ? (<span className="errors"> {errors.form} </span>) : null}
          <div className="containerSubmit">
            <input  className="submit" type="submit"></input>
          </div>
        </div>
      </form>
    </div>
  );
}
