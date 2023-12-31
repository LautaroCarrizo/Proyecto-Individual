const { Recipe } = require("../../db");

async function filterRecipeDataBase(req, res) {
  const { datosRecipes } =  req.body
  try {
    const recipesFromDB = await Recipe.findAll();
    const recipesInDB = datosRecipes.alldata.filter((recipe) => {
      return recipesFromDB.some((dbRecipe) => dbRecipe.id === recipe.id);
    });
 
    res.status(200).json({ alldata: recipesInDB }); 
  } catch (error) {
   
    res.status(500).json({ error: "Error filtering recipes" });
  }
}

module.exports = filterRecipeDataBase;



