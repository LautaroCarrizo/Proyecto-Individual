
  function onClose(req, res) {
    try {
      let { id, recipes } = req.body;
      recipes = recipes.filter(re => re.id !== id);
      return res.status(200).json({alldata: recipes});
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
  module.exports = onClose