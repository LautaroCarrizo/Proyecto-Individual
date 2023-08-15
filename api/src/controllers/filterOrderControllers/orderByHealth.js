function orderRecipesByHealth(req, res) {
    try {
      const { order, allRecipes } = req.body;
     
      const recipesHealth = [...allRecipes.alldata];
    
      recipesHealth.sort((a, b) => {
        if (order === "Mayor") {
          return b.healthScore - a.healthScore;
        } else if (order === "Menor") {
          return a.healthScore - b.healthScore; 
        }
        return 0;
      });
     
      res.status(200).json({ alldata: recipesHealth });
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
  
  module.exports = orderRecipesByHealth;
