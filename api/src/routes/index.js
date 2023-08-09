const { Router } = require("express");
const getRecipeById = require("../controllers/getRecipeById");
const getRecipeByName = require("../controllers/getRecipeByName");
const getDiets = require("../controllers/getDiets");
const postRecipe = require("../controllers/postRecipe");
const getAllRecipes = require("../controllers/getAllRecipes");
const onClose = require("../controllers/filterOrderControllers/onClose");
const filterDiets = require("../controllers/filterOrderControllers/filterDiets");
const filterRecipeDataBase = require("../controllers/filterOrderControllers/filterRecipeDataBase");
const orderRecipesByName = require("../controllers/filterOrderControllers/orderByName")
const orderRecipesByHealth = require("../controllers/filterOrderControllers/orderByHealth")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post("/recipes", postRecipe);
router.post("/onclose", onClose);
router.post("/filter/diets", filterDiets);
router.post("/filter/recipes", filterRecipeDataBase);
router.post("/order", orderRecipesByName)
router.post("/healthscore", orderRecipesByHealth)
router.get("/", getAllRecipes);
router.get("/recipes/:idRecipe", getRecipeById);
router.get("/recipes", getRecipeByName);
router.get("/diets", getDiets);

module.exports = router;
