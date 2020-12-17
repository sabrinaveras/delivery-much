const axios = require("axios")

const UrlConst = require("../utils/URLConstants")

module.exports = {

    // region get
    async getRecipesByIngredients(ingredients){

        return await axios.get(UrlConst.recipePuppy.RECIPE_BASE_URL + UrlConst.recipePuppy.RECIPE_ADD_INGREDIENTS + ingredients)

    }
    // endregion get

}
