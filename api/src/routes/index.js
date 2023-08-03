const { Router } = require('express');
const getRecipeById = require("../controllers/getRecipeById")
const getRecipeByName = require("../controllers/getRecipeByName")
const getDiets = require("../controllers/getDiets")
const postRecipe = require("../controllers/postRecipe")
const getAllRecipes = require("../controllers/getAllRecipes")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", getAllRecipes)
router.get("/recipes/:idRecipe", getRecipeById)
router.get("/recipes", getRecipeByName)
router.get("/diets", getDiets)
router.post("/recipes", postRecipe)


module.exports = router;
