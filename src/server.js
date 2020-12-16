const express = require("express");
const axios = require("axios");
const giphy = require("giphy-api")("TY6YhWEJ6b2Bci9M74PTMj2DeQebGgpv");

const app = express();

async function getGif(title){

    return await giphy.random(title)

}


app.get("/", async (request, response) => {

    let finalResult = [];
    let ingredients = request.query.i.split(",").sort();

    console.log("Ingredients: ", ingredients)

    if(ingredients.length > 3)
        return response.status(400).json({ error: "muitos ingredientes, escolha somente três"})


    await axios.get("http://www.recipepuppy.com/api/?i=" + request.query.i)
        .then(axiosResponse => {

            if(axiosResponse.data.results.length){
                if(axiosResponse.status !== 200){
                    return response.status(400).json({ error: "Problemas em conseguir suas receitas com esses ingredientes"})
                }

                axiosResponse.data.results.forEach(function (result) {

                    finalResult.push( {
                        "title": result.title,
                        "ingredients": result.ingredients,
                        "link": result.href
                    })

                })

                giphy.trending({tag: "superman", limit: 10}, function (error, giphyResponse){
                    console.log("response: ", giphyResponse.data);
                })

                return response.status(200).json({keywords: ingredients, recipes: finalResult})
            }else{
                return response.status(404).json({ error: "não tenhos receitas com esse ingrediente"})
            }


        }).catch(error => {
            console.error(error)
    })


    // giphy.random('pokemon', function (err, res) {
    //     console.log(res.data.url);
    //
    //     // return response.status(200).send(res.data)
    //     return response.status(200).send("<img src={res.data.url} alt={'giphy'}/>")
    // });

})




app.listen(3333, () => {
    console.log(`running`)
})