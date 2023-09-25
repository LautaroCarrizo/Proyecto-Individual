
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postRecipeAction } from "../../redux/actions";
import validation from "./validationsForms";
import Messages from "../messages/messages";
import ErrorHandler from "../errors/error";
import "./form.css";

export default function FormRecipe() {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState({
    name: "",
    summary: "",
    healthScore: 0,
    steps: "",
    diets: [],
    img: null,
  });
  const [errors, setError] = useState([]);

  function handlerPost(event) {
    event.preventDefault();
    const validationErrors = validation(recipe);
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      const recipeWithImage = {
        ...recipe,
        image: "../../../img/imgRecipe.jpg",
      };
      dispatch(postRecipeAction(recipeWithImage));
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    let parsedValue = value;
    if (name === "healthScore") {
      parsedValue = parseFloat(value);
    } else {
      parsedValue = value;
    }

    const updatedRecipe = { ...recipe, [name]: parsedValue };

    setRecipe(updatedRecipe);
    setError(validation(updatedRecipe));
  }

  function handlerChangeDiets(event) {
    const { value } = event.target;
    const updatedDiets = recipe.diets.includes(value)
      ? recipe.diets.filter((d) => d !== value)
      : [...recipe.diets, value];

    const updatedRecipe = { ...recipe, diets: updatedDiets };

    setRecipe(updatedRecipe);
    setError(validation(updatedRecipe));
  }

  return (
    <div className="containerAllFormRecipe">
      <video
        autoPlay
        loop
        muted
        style={{
          width: "50%",
          height: "100vh",
          objectFit: "cover",
        }}
      >
        <source src="../../../img/formvideo3.mp4" type="video/mp4" />
      </video>
      <div className="contarinerForm">
        <form className="form" onSubmit={handlerPost}>
          <h1 className="tituloForm">¡Crea tu propia Receta!</h1>

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
          {errors.form ? <span className="errors"> {errors.form} </span> : null}
          <Messages />
          <div className="containerSubmit">
            <input className="submit" type="submit"></input>
          </div>
          <ErrorHandler/>
        </form>
      </div>
    </div>
  );
}
