const axios = require("axios")

const RecipePuppyAPI = require("../networks/recipePuppyAPI");
const GiphyAPI = require("../networks/giphyAPI");

module.exports = {

    // region select

    selectRecipes: async function (request, response) {

        try {
            const ingredients = request.query.i
            const ingredientsList = ingredients.split(",").sort()
            const ingredientsLength = ingredientsList.length

            let finalRecipes = []

            if (ingredientsLength > 3)
                return response.status(400).json({ error: "Número máximo de ingredientes são 3, você colocou " + ingredientsLength })

            let recipes = await RecipePuppyAPI.getRecipesByIngredients(ingredients)

            for (let index = 0; index < recipes.data.results.length; index++){
                let recipe = recipes.data.results[index]

                let giphy = await GiphyAPI.getGiphyRandom(recipe.title)

                finalRecipes.push({
                    "title": recipe.title,
                    "ingredients": recipe.ingredients.split(", ").sort(),
                    "link": recipe.href,
                    "gif": giphy.data.data.url
                })

            }

            return response.status(200).json({ keywords: ingredientsList, recipes: finalRecipes })
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }

    }

    // endregion select
}
