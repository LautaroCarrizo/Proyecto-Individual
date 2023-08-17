const axios = require("axios");
const { Recipe, Diets } = require("../db");
const URL = `https://api.spoonacular.com/recipes`;
const { API_KEY } = process.env;

async function getRecipeById(req, res) {
  const { idRecipe } = req.params;
 
  let detail = null;
  try {
    if (Number(idRecipe)) {
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
        detail = recipe;
        return res.json({ detail });
      } else {
        return res.status(404).json({ message: "Not Found" });
      }
    } else {
      const recipesDB = await Recipe.findOne({
        where: {
          id: idRecipe,
        },
        include: {
          model: Diets,
          attributes: ["name"],
        },
      });

      if (recipesDB) {
        const recipeWhitDiets = recipesDB.dataValues.diets.map(
          (diet) => diet.dataValues.name
        );
        detail = {
          id: recipesDB.id,
          name: recipesDB.name,
          image: recipesDB.image,
          summary: recipesDB.summary,
          healthScore: recipesDB.healthScore,
          steps: recipesDB.steps,
          diets: recipeWhitDiets,
        };

        return res.status(200).json({ detail });
      } else {
      }
      return res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = getRecipeById;
