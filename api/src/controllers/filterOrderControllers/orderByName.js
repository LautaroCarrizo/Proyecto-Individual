function orderRecipes(req, res) {
    try {
        const { order, allRecipes } = req.body;
        const recipes = order === "A" 
          ? allRecipes.sort((a, b) => a.name.localeCompare(b.name))
          : allRecipes.sort((a, b) => b.name.localeCompare(a.name));
      
        res.status(200).json(recipes);
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
  }

module.exports = orderRecipes