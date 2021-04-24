const { default: axios } = require('axios');
const { response } = require('express');
const express = require('express');
const app = express();
const Twitter = require('./api/helpers/twitter');
const twitter = new Twitter();
const port = 3000;
const dotenv = require('dotenv');
dotenv.config();

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    next();

})






app.get('/tweets', (req,res) => {



    const query = req.query.q;
    const count = req.query.count;

    const maxId = req.query.max_id;


    const url = "https://api.twitter.com/1.1/search/tweets.json";

    twitter.get(query, count, maxId).then((response)=>{

        console.log(process.env.TWITTER_API_TOKEN);
        res.status(200).send(response.data);
        

    }).catch((error)=>{

        res.status(400).send(error);
    })



})

app.listen(port, () => console.log(`Twitter API listening on port ${port}!`));