const { Recipe, Diets } = require("../db");
const { Op } = require("sequelize");

async function postRecipe(req, res) {
  const { title, image, summary, healthScore, steps, diets } = req.body;
  if (!title || !summary || !healthScore || !diets)
    return res.status(401).send("Faltan datos");
  try {
    const [newRecipe, created] = await Recipe.findOrCreate({
      where: { title },
      defaults: { image, summary, healthScore, steps, diets },
    });
    console.log(newRecipe);
    if (Array.isArray(diets) && diets.length > 0) {
      const dietObjs = await Diets.findAll({
        where: { name: { [Op.in]: diets } },
      });
      await newRecipe.setDiets(dietObjs);
    }
    const allRecipes = await Recipe.findAll();
    console.log(allRecipes);
    return res
      .status(200)
      .json({ message: "Created", newOne: newRecipe, data: allRecipes });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = postRecipe;
