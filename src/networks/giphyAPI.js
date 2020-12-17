const axios = require("axios")

const GIPHY_API_KEY = "api_key=TY6YhWEJ6b2Bci9M74PTMj2DeQebGgpv"  // GIPHY API Key
const GIPHY_BASE_URL_RANDOM = "http://api.giphy.com/v1/gifs/random?" + GIPHY_API_KEY  // The GIF or Sticker returned is completely random
const GIPHY_Q = "&q="  // Search query term or phrase
const GIPHY_LIMIT = "&limit=1"  // The maximum number of objects to return. (Default: “25”).

module.exports = {

    async getGiphyRandom(search){

        return await axios.get(GIPHY_BASE_URL_RANDOM + GIPHY_Q + search + GIPHY_LIMIT)
    }
}