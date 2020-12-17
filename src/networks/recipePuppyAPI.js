const axios = require("axios")

const RECIPE_BASE_URL = "http://www.recipepuppy.com/api";
const RECIPE_ADD_INGREDIENTS = "/?i="

module.exports = {

    async getRecipes(ingredients){

        return await axios.get(RECIPE_BASE_URL + RECIPE_ADD_INGREDIENTS + ingredients)

    }
}
