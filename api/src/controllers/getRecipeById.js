const axios = require("axios");
const { Recipe } = require("../db");
const URL = `https://api.spoonacular.com/recipes`;
const { API_KEY } = process.env;

async function getRecipeById(req, res) {
  const { idRecipe } = req.params;
  try {
    const dataBaseRecipeId = await Recipe.findByPk(idRecipe);
    if (dataBaseRecipeId) {
      return res.status(200).json(dataBaseRecipeId);
    } else {
      const response = await axios.get(
        `${URL}/${idRecipe}/information?apiKey=${API_KEY}`
      );
      const { status, data } = response;
      if (status === 200 && data && data.id) {
        const recipe = {
          id: data.id,
          name: data.title,
          image: data.image,
          summary: data.summary,
          healthScore: data.healthScore,
          steps: data.analyzedInstructions[0]?.steps.map((step) => {
            return {
              number: step.number,
              step: step.step,
            };
          }),
          diets: data.diets,
        };
        return res.json({ message: "encontrado", recipe });
      } else {
        return res.status(404).json({ message: "Not Found" });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = getRecipeById;
