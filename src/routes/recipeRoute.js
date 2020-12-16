const routes = require("express").Router()

const RecipeController = require("../controllers/RecipeController");

routes.get("/", RecipeController.selectRecipes)

module.exports = (app) => app.use("/recipes", routes)