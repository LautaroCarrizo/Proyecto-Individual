const numberRegex = /\d/; // Expresión regular para encontrar números

const validation = (recipeData) => {
  let errors = {};

  if (!recipeData.name) {
    errors.name = "Es obligatorio ingresar el nombre";
  }
  if(numberRegex.test(recipeData.autor)){
    errors.autor = "El nombre del Chef no puede contener numeros"
  }
  if (numberRegex.test(recipeData.name)) {
    errors.name = "El nombre no puede contener números";
  }

  if (recipeData.name && recipeData.name.length <= 4) {
    errors.name = "El nombre debe tener más de 4 caracteres";
  }

  if (recipeData.summary && !(recipeData.summary.length <= 180)) {
    errors.summary = "Solo puedes escribir 180 caracteres";
  }

  if (
    typeof recipeData.healthScore !== "undefined" &&
    (recipeData.healthScore < 0 || recipeData.healthScore > 100)
  ) {
    errors.healthScore = "Solo puedes puntuar con números 0 a 100";
  }

  if (recipeData.steps && !(recipeData.steps.length <= 180)) {
    errors.steps = "Solo puedes escribir 180 caracteres";
  }

  if (!recipeData.diets || recipeData.diets.length === 0) {
    errors.diets = "Debes seleccionar al menos 1 dieta";
  }
  if (Object.keys(errors).length > 0) {
    errors.form = "Tu receta no es apta";
  }
  return errors;
};

export default validation;
