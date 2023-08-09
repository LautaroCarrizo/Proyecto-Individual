const axios = require("axios");
const URL = `https://api.spoonacular.com/recipes/complexSearch`;
const { API_KEY } = process.env;

//Function
async function getAllRecipes(req, res) {
  try {
    const response = await axios.get(
      `${URL}?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );
    const { data } = response;
    const allDataRecipes = data.results;
    let filtroData = allDataRecipes.map((recipe) => {
      return {
        name: recipe.title,
        vegetarian: recipe.vegetarian,
        vegan: recipe.vegan,
        glutenFree: recipe.glutenFree,
        dairyFree: recipe.dairyFree,
        image: recipe.image,
        id: recipe.id,
        score: recipe.spoonacularScore,
        healthScore: recipe.healthScore,
        types: recipe.dishTypes?.map((element) => element),
        diets: recipe.diets?.map((element) => element),
        summary: recipe.summary,
        steps: (recipe.analyzedInstructions[0]?.steps || []).map((step) => {
          return {
            number: step.number,
            step: step.step,
          };
        }),
      };
    });
    return res.status(200).json({alldata: filtroData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = getAllRecipes;

