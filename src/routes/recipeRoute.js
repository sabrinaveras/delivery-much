const routes = require("express").Router()

// api route
const route = require("../utils/ApiRoute")

const RecipeController = require("../controllers/RecipeController");

routes.get(route.recipe.recipeGetByIngredients, RecipeController.selectRecipes)

module.exports = (app) => app.use(route.recipe.recipeRoot, routes)