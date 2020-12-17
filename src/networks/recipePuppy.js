const axios = require("axios")

const BASE_URL = "http://www.recipepuppy.com/api";
const ADD_INGREDIENTS = "/?i="

const getsIngredients = async (ingredients) =>{
    try{
        return await axios.get(BASE_URL + ADD_INGREDIENTS + ingredients)
    }catch (error) {
        console.log("error getsIngredients" + error)
    }
}

const getsRecipes = async (ingredients) =>{

    const recipes = await getsIngredients(ingredients)

    console.log(recipes)
}

module.exports = getsRecipes;
