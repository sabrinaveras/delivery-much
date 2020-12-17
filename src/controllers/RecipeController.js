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

            // checking if the ingredients is minor the three
            if (ingredientsLength > 3)
                return response.status(400).json({ error: "Número máximo de ingredientes são 3, você colocou " + ingredientsLength })

            // getting the recipes
            let recipes = await RecipePuppyAPI.getRecipesByIngredients(ingredients)

            // check if the recipes was uploaded
            if(recipes.status !== 200)
                return response.status(recipes.status).json({ error: recipes.statusText})

            // Going through all the recipes to add image
            for (let index = 0; index < recipes.data.results.length; index++){
                let recipe = recipes.data.results[index]

                // getting giphy image
                let giphy = await GiphyAPI.getGiphyRandom(recipe.title)
                let giphyImage = ""


                // checking if the giphy was uploaded
                if(giphy.data.meta.status !== 200)
                    giphyImage = "Não foi possível carregar imagem"
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

            return response.status(200).json({ keywords: ingredientsList, recipes: finalRecipes })
        } catch (error) {
            return response.status(500).json({ error: error.message })
        }

    }

    // endregion select
}
