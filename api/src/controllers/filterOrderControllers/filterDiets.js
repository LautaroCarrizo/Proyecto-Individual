
const {Diets} = require("../../db")


async function filterDiets(req, res) {
    const { nameDiet, datosRecipes } = req.body;
     //console.log(datosRecipes.alldata)
    try {
        const diet = await Diets.findOne({ where: { name: nameDiet } });
        const dietName = diet.name;

        const filteredRecipes = datosRecipes.alldata.filter(recipe =>
            recipe.diets && recipe.diets.includes(dietName)
        );
         //console.log(filteredRecipes)
        res.status(200).json({alldata: filteredRecipes});
    } catch (error) {
        res.status(500).json({ error: 'Error filtering recipes' });
    }
}
module.exports = filterDiets