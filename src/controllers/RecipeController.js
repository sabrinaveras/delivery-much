const axios = require("axios")

const RECIPE_BASE_URL = "http://www.recipepuppy.com/api";
const RECIPE_ADD_INGREDIENTS = "/?i="

const GIPHY_BASE_URL_RANDOM = "http://api.giphy.com/v1/gifs/random?api_key=TY6YhWEJ6b2Bci9M74PTMj2DeQebGgpv"
const GIPHY_Q = "&q="
const GIPHY_LIMIT = "&limit=1"

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

            let recipes = await axios.get(RECIPE_BASE_URL + RECIPE_ADD_INGREDIENTS + ingredients)

            for (let index = 0; index < recipes.data.results.length; index++){
                let recipe = recipes.data.results[index]
                console.log(recipe)
                let giphy = await axios.get(GIPHY_BASE_URL_RANDOM + GIPHY_Q + recipe.title + GIPHY_LIMIT)
                console.log(giphy.data.data.url)

                finalRecipes.push({
                    "title": recipe.title,
                    "ingredients": ingredientsList,
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
