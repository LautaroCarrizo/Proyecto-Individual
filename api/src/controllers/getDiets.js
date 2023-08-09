const { Diets } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;
const URL = `https://api.spoonacular.com/recipes/complexSearch`;

async function getDiets(req, res) {
  try {
    const response = await axios.get(
      `${URL}?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );
    const { data } = response;
    const allDataRecipes = data.results;
    let arrayDiet = [];
    allDataRecipes.forEach((recipe) => {
      const { diets } = recipe;
      if (diets.length) arrayDiet.push(...diets);
    });
    let arrayDietsDef = [...new Set(arrayDiet)];

    for (const dietName of arrayDietsDef) {
      const [insertDiet, created] = await Diets.findOrCreate({
        where: { name: dietName },
        defaults: { name: dietName },
      });
    }
    const allDiets = await Diets.findAll();
    res.status(200).json({ data: allDiets });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = getDiets;

// const dietTypesDb = [
//     "gluten free",
//     "ketogenic",
//     "vegetarian",
//     "lacto vegetarian",
//     "ovo vegetarian",
//     "lacto ovo vegetarian",
//     "vegan",
//     "pescetarian",
//     "paleolithic",
//     "primal",
//     "low fodmap",
//     "whole 30",
//     "dairy free",
//   ];
