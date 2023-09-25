const axios = require("axios");
const URL = `https://api.spoonacular.com/recipes/complexSearch`;
const { API_KEY } = process.env;
const { Recipe } = require("../db");
const { Diets } = require("../db");

async function getAllRecipes(req, res) {
  try {
    const response = await axios.get(
      `${URL}?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );
    const { data } = response;
    const results = data.results;
    const recipesFromDB = await Recipe.findAll({
      attributes: ["id", "name", "image"],
      include: {
        model: Diets,
        attributes: ["name"],
      },
    });

    const recipesFromDBMapped = recipesFromDB.map((recipe) => {
      const mappedDiets = recipe.dataValues.diets
        ? recipe.dataValues.diets.map((diet) => diet.name)
        : [];

      return {
        id: recipe.id,
        autor: recipe.autor,
        name: recipe.name,
        image: recipe.image,
        diets: mappedDiets,
        healthScore: recipe.healthScore,
      };
    });

    const apiRecipesMapped = results?.map((recipe) => {
      return {
        id: recipe.id,
        autor: recipe.name,
        name: recipe.title,
        image: recipe.image,
        diets: recipe.diets,
        healthScore: recipe.healthScore,
      };
    });

    const allDataRecipes = [...recipesFromDBMapped, ...apiRecipesMapped];

    const filtroData = allDataRecipes.map((recipe) => {
      return {
        id: recipe.id,
        autor: recipe.autor,
        name: recipe.name,
        image: recipe.image,
        diets: recipe.diets,
        healthScore: recipe.healthScore,
      };
    });

    return res.status(200).json({ alldata: filtroData });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = getAllRecipes;
