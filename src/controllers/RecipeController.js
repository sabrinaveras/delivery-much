const RecipePuppy = require("../networks/recipePuppy");

module.exports = {

    // region select

    async selectRecipes(request, response){

        try{
            const ingredients = request.query.i
            const ingredientsList = ingredients.split(",").sort()
            const ingredientsLength = ingredientsList.length

            if(ingredientsLength > 3)
                return response.status(400).json({ error: "Maximo de ingredientes é três, você colocou " + ingredientsLength})

            const recipes = await RecipePuppy.getRecipesAsync(ingredients)

            return response.status(200).json({ keywords: ingredientsList, recipes: recipes })
        }catch (error){
            return response.status(500).json({ error: error.message })
        }

    }

    // endregion select
}