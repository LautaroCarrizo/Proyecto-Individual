function orderRecipesByHealth(req, res) {
    try {
        const { order, allRecipes } = req.body;
        const recipes = order === "Health score" 
          ? allRecipes.sort((a, b) => b.healthScore - a.healthScore) // Mayor a menor
          : allRecipes.sort((a, b) => a.healthScore - b.healthScore); // Menor a mayor
        res.status(200).json(recipes);
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
}

module.exports = orderRecipesByHealth;
