function orderRecipesByName(req, res) {
  try {
    const { order, allRecipes } = req.body;
    const recipes = [...allRecipes.alldata];
    recipes.sort((a, b) => {
      if (order === "A") {
        return a.name.localeCompare(b.name);
      } else if (order === "D") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });
    res.status(200).json({ alldata: recipes });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}

module.exports = orderRecipesByName;
