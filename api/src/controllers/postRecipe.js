const { Recipe, Diets } = require("../db");
const { Op } = require("sequelize");
const numberRegex = /\d/;

async function postRecipe(req, res) {

  const { name, image, summary, healthScore, steps, diets } = req.body

  
  if (!name || !diets) return res.status(401).send("Faltan datos");

  if (!name) {
    return res
      .status(401)
      .json({message: "Datos incorrectos, Es obligatorio ingresar el nombre"});
  }
  if (numberRegex.test(name)) {
    return res
      .status(401)
      .json({message: "Datos incorrectos, El nombre no puede contener números"});
  }

  if (name && name.length <= 4) {
    return res
      .status(401)
      .json( {message: "Datos incorrectos, El nombre debe tener más de 4 caracteres"});
  }

  if (summary && !(summary.length <= 180)) {
    return res
      .status(401)
      .json({message:  "Datos incorrectos, Solo puedes escribir 180 caracteres"});
  }

  if (
    typeof healthScore !== "undefined" &&
    (healthScore < 0 || healthScore > 100)
  ) {
    return res
      .status(401)
      .json({message:  "Datos incorrectos, Solo puedes puntuar con números 0 a 100"});
  }

  if (steps && !(steps.length <= 180)) {
    return res
      .status(401)
      .json({message: "Datos incorrectos, Solo puedes escribir 180 caracteres"});
  }

  if (!diets || diets.length === 0) {
    return res
      .status(401)
      .json({message: "Datos incorrectos, Debes seleccionar al menos 1 dieta"});
  }

  try {
    const [newRecipe, created] = await Recipe.findOrCreate({
      where: { name },
      defaults: { image, summary, healthScore, steps },
    });
   
    if (Array.isArray(diets) && diets.length > 0) {
      const dietObjs = await Diets.findAll({
        where: {
          name: {
            [Op.in]: diets,
          },
        },
      });
      
      await newRecipe.setDiets(dietObjs);
    }
    const recipe = await Recipe.findByPk(newRecipe.id, {
      include: {
        model: Diets,
        as: "diets",
        through: { attributes: [] },
      },
    });
   
    return res.status(200).json({ message: "Created", data: recipe });
  } catch (error) {

    res.status(500).json({ error: error.message });
  }
}

module.exports = postRecipe;
