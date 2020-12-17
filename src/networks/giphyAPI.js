const axios = require("axios")

const UrlConst = require("../utils/URLConstants")

module.exports = {

    // region get
    async getGiphyRandom(search){

        return await axios.get(UrlConst.giphy.GIPHY_BASE_URL_RANDOM + UrlConst.giphy.GIPHY_API_KEY + UrlConst.giphy.GIPHY_Q + search + UrlConst.giphy.GIPHY_LIMIT)
    }
    // endregion get
}