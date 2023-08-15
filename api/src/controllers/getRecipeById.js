const axios = require("axios");
const { Recipe, Diets, sequelize } = require("../db");
const URL = `https://api.spoonacular.com/recipes`;
const { API_KEY } = process.env;

async function getRecipeById(req, res) {
  const { idRecipe } = req.params;
  let recipeSend = "";
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
        recipeSend = recipe;

        return res.json({ message: "encontrado", recipeSend });
      } else {
        return res.status(404).json({ message: "Not Found" });
      }
    } else {
      const dataBaseRecipeId = await Recipe.findByPk(idRecipe);
      const recipeData = dataBaseRecipeId.dataValues;
      const recipesDB = await Recipe.findAll({
        where: { id: recipeData.id }, 
        include: [
          {
            model: Diets,
            as: "diets",
            through: {
              model: sequelize.models.RecetaDietaTable,
              attributes: [],
            },
          },
        ],
      });
      
      console.log("FROM DATA BASE", recipesDB);
      if (recipesDB) {
        console.log(recipesDB);
        return res.status(200).json({ recipesDB });
      } else {
        return res.status(404).json({ message: "Not Found" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = getRecipeById;