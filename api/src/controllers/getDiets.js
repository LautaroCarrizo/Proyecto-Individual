const { Diets } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;
const URL = `https://api.spoonacular.com/recipes/complexSearch`;

async function getDiets(req, res) {
  const start =400; // Primer elemento que deseas obtener
  const end = 500; // Último elemento que deseas obtener
  const batchSize = end - start + 1; // Tamaño del lote

  try {
    const response = await axios.get(
      `${URL}?apiKey=${API_KEY}&addRecipeInformation=true&offset=${start}&number=${batchSize}`
    );
    const { data } = response;
    const allDataRecipes = data.results;
    let arrayDiet = [];
    allDataRecipes.forEach((recipe) => {
      const { diets } = recipe;
      if (diets.length) arrayDiet.push(...diets);
    });
    let arrayDietsDef = [...new Set(arrayDiet)];

    for (const dietName of arrayDietsDef) {
      const [insertDiet, created] = await Diets.findOrCreate({
        where: { name: dietName },
        defaults: { name: dietName },
      });
    }
    const allDiets = await Diets.findAll();
    res.status(200).json({ data: allDiets });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = getDiets;

// const dietTypesDb = [
//     "gluten free",
//     "ketogenic",
//     "vegetarian",
//     "lacto vegetarian",
//     "ovo vegetarian",
//     "lacto ovo vegetarian",
//     "vegan",
//     "pescetarian",
//     "paleolithic",
//     "primal",
//     "low fodmap",
//     "whole 30",
//     "dairy free",
//   ];

// {
//     "data": [
//       {
//         "id": 1,
//         "name": "gluten free",
//         "createdAt": "2023-08-02T20:21:37.631Z",
//         "updatedAt": "2023-08-02T20:21:37.631Z"
//       },
//       {
//         "id": 2,
//         "name": "dairy free",
//         "createdAt": "2023-08-02T20:21:37.664Z",
//         "updatedAt": "2023-08-02T20:21:37.664Z"
//       },
//       {
//         "id": 3,
//         "name": "paleolithic",
//         "createdAt": "2023-08-02T20:21:37.672Z",
//         "updatedAt": "2023-08-02T20:21:37.672Z"
//       },
//       {
//         "id": 4,
//         "name": "primal",
//         "createdAt": "2023-08-02T20:21:37.676Z",
//         "updatedAt": "2023-08-02T20:21:37.676Z"
//       },
//       {
//         "id": 5,
//         "name": "whole 30",
//         "createdAt": "2023-08-02T20:21:37.680Z",
//         "updatedAt": "2023-08-02T20:21:37.680Z"
//       },
//       {
//         "id": 6,
//         "name": "pescatarian",
//         "createdAt": "2023-08-02T20:21:37.685Z",
//         "updatedAt": "2023-08-02T20:21:37.685Z"
//       },
//       {
//         "id": 7,
//         "name": "lacto ovo vegetarian",
//         "createdAt": "2023-08-02T20:21:37.691Z",
//         "updatedAt": "2023-08-02T20:21:37.691Z"
//       },
//       {
//         "id": 8,
//         "name": "vegan",
//         "createdAt": "2023-08-02T20:21:37.694Z",
//         "updatedAt": "2023-08-02T20:21:37.694Z"
//       },
//       {
//         "id": 9,
//         "name": "ketogenic",
//         "createdAt": "2023-08-02T20:21:37.699Z",
//         "updatedAt": "2023-08-02T20:21:37.699Z"
//       },
//       {
//         "id": 10,
//         "name": "fodmap friendly",
//         "createdAt": "2023-08-02T20:21:37.704Z",
//         "updatedAt": "2023-08-02T20:21:37.704Z"
//       }
//     ]
//   }
