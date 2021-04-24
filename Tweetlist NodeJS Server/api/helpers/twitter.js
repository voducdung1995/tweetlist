const axios = require('axios');

const URL = "https://api.twitter.com/1.1/search/tweets.json";
class Twitter{

    get(query, count, maxId){

        return axios.get(URL, {

            params: {
                q: query,
                count: count,
                tweet_mode: "extended",
                max_id: maxId
            },
    
            headers: {
    
                "Authorization": `Bearer ${process.env.TWITTER_API_TOKEN}`
                //"Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAALz2NgEAAAAAv2t4CxLqg9lanDpszsZsq2FIryI%3DvRPiyQgG8AfCb6vROnjtlJbk4z1V2laHyA0yrqXw6VzlHnnBoj"
            }
    
        })


    }


}

module.exports = Twitter;