const axios = require("axios");
const URL = `https://api.spoonacular.com/recipes/complexSearch`;
const { API_KEY } = process.env;
const { Recipe } = require("../db");
const { Diets } = require("../db");
const handlerRecipes = require("../controllers/handlerBackApp/handlerRecipes")
//Function
async function getAllRecipes(req, res) {
  try {
    const recipesFromDB = await Recipe.findAll({
      attributes: ["id", "name", "image"],
      include: {
        model: Diets,
        attributes: ["name"],
      },
    });
    // const response = await axios.get(
    //   `${URL}?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    // );
    const results = await handlerRecipes();

    //const { data } = response;
    //const allDataRecipes = data.results;
    const allDataRecipes = [...recipesFromDB, ...results];
    console.log(allDataRecipes);

    let filtroData = allDataRecipes.map((recipe) => {
      return {
        id: recipe.id,
        name: recipe.title,
        image: recipe.image,
        diets: recipe.diets,
        healthScore: recipe.healthScore
      };
    });

    return res.status(200).json({ alldata: filtroData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}


module.exports = getAllRecipes;

