const axios = require("axios");
const { Recipe } = require("../db");
const URL = `https://api.spoonacular.com/recipes/complexSearch`;
const { API_KEY } = process.env;
const { Op } = require("sequelize");

async function getRecipeByName(req, res) {
  const { name } = req.query;
 
  try {
    const dataBaseRecipeName = await Recipe.findAll({
      where: { name: { [Op.iLike]: name } },
    });
    if (dataBaseRecipeName.length)
      return res.status(200).json({alldata: dataBaseRecipeName});
    else {
      const response = await axios.get(
        `${URL}?apiKey=${API_KEY}&addRecipeInformation=true&query=${name}`
      );
      
     const dataName = response.data.results?.map((recipe) => {
      return {
        id: recipe.id,
        name: recipe.title,
        image: recipe.image,
        diets: recipe.diets,
        healthScore: recipe.healthScore,
      };
     })
    
      return response.data.results.length ? res.status(200).json({alldata: dataName}) : res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = getRecipeByName;
