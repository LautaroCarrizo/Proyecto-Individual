const {Recipe} = require("../../db")



async function filterRecipeDataBase(req, res) {
  const { allRecipes } = req.body;
  
  try {
    const recipesFromDB = await Recipe.findAll();
    const recipesNotInDB = allRecipes.filter(recipe => {
      return !recipesFromDB.some(dbRecipe => dbRecipe.id === recipe.id);
    });
    
    res.status(200).json(recipesNotInDB);
  } catch (error) {
    res.status(500).json({ error: 'Error filtering recipes' });
  }
}

module.exports = filterRecipeDataBase;

