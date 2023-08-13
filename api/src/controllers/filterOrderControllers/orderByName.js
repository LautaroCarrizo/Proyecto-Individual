function orderRecipesByName(req, res) {
  try {
    const { order, allRecipes } = req.body;
    console.log(order)
    const recipes = [...allRecipes.alldata];
    recipes.sort((a, b) => {
      if (order === "A") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
  
    });
    console.log("ordenameee", allRecipes)
    res.status(200).json({ alldata: recipes });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}

module.exports = orderRecipesByName;
