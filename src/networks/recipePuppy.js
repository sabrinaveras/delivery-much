const axois = require("axios")
const https = require("https")

module.exports = {

    async getRecipesAsync(ingredients){

        await axois.get("http://www.recipepuppy.com/api/?i=" + ingredients)
            .then(response => {

                if(response.status !== 200)
                    return {
                        code: response.status,
                        statusText: response.statusText,
                        result: null
                    }

                return {
                    code: response.status,
                    statusText: response.statusText,
                    result: response.data.results
                }
            })

    }
}