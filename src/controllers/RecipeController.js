// APIs
const RecipePuppyAPI = require("../networks/recipePuppyAPI")
const GiphyAPI = require("../networks/giphyAPI")

// status code
const StatusCode = require("../utils/statusCode")

// messages
const messages = require("../utils/messages")

module.exports = {

    // region select
    async selectRecipes(request, response) {

        try {
            const ingredients = request.query.i
            const ingredientsList = ingredients.split(",").sort()
            const ingredientsLength = ingredientsList.length

            let finalRecipes = []

            // checking if the ingredients is minor the three
            if (ingredientsLength > 3)
                return response.status(StatusCode.Status400BadRequest).json({ error: messages.errorMessage.imageNotUpload + ingredientsLength })

            // getting the recipes
            let recipes = await RecipePuppyAPI.getRecipesByIngredients(ingredients)

            // check if the recipes was uploaded
            if(recipes.status !== StatusCode.Status200OK)
                return response.status(recipes.status).json({ error: recipes.statusText})

            // Going through all the recipes to add image
            for (let index = 0; index < recipes.data.results.length; index++){
                let recipe = recipes.data.results[index]

                // getting giphy image
                let giphy = await GiphyAPI.getGiphyRandom(recipe.title)
                let giphyImage = ""


                // checking if the giphy was uploaded
                if(giphy.data.meta.status !== StatusCode.Status200OK)
                    giphyImage = messages.errorMessage.imageNotUpload
                else
                    giphyImage = giphy.data.data.url

                // pushing the recipe into the final array
                finalRecipes.push({
                    "title": recipe.title,
                    "ingredients": recipe.ingredients.split(", ").sort(),
                    "link": recipe.href,
                    "gif": giphyImage
                })

            }

            return response.status(StatusCode.Status200OK).json({ keywords: ingredientsList, recipes: finalRecipes })
        } catch (error) {
            return response.status(StatusCode.Status500InternalServerError).json({ error: error.message })
        }

    }
    // endregion select
}
