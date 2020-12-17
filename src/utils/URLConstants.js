module.exports = {

    // region giphy
    giphy: {

        GIPHY_API_KEY: "api_key=" + process.env.GIPHY_API_KEY,  // GIPHY API Key
        GIPHY_BASE_URL_RANDOM: "http://api.giphy.com/v1/gifs/random?",  // The GIF or Sticker returned is completely random
        GIPHY_Q: "&q=",  // Search query term or phrase
        GIPHY_LIMIT: "&limit=1",  // The maximum number of objects to return. (Default: “25”).
    },
    // endregion giphy

    // region recipe puppy
    recipePuppy:{
        RECIPE_BASE_URL: "http://www.recipepuppy.com/api", // url base
        RECIPE_ADD_INGREDIENTS: "/?i=", // add news ingredients
    }
    // endregion recipe puppy

}