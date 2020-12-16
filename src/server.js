const express = require("express");
const giphy = require("giphy-api")("TY6YhWEJ6b2Bci9M74PTMj2DeQebGgpv");

const app = express();


app.get("/", async (request, response) => {

    giphy.random('pokemon', function (err, res) {
        console.log(res.data.url);

        // return response.status(200).send(res.data)
        return response.status(200).send("<img src={res.data.image_original_url} alt={'giphy'}/>")
    });

})




app.listen(3333, () => {
    console.log(`running`)
})