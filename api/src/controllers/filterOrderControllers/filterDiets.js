
const {Diets} = require("../../db")


async function filterDiets(req, res) {
    const { nameDiet, allRecipes } = req.body;
    try {
        const diet = await Diets.findOne({ where: { name: nameDiet } });

        const dietName = diet.name;

        const filteredRecipes = allRecipes.filter(recipe =>
            recipe.diets.some(elem => elem === dietName)
        );

        res.status(200).json(filteredRecipes);
    } catch (error) {
        res.status(500).json({ error: 'Error filtering recipes' });
    }
}
module.exports = filterDiets