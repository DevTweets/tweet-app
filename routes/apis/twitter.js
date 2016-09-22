require('dotenv').config()
const router = require('express').Router()
const _ = require('lodash')
const Twit = require('twit')
const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

function get (keyword) {
  return T.get('search/tweets', { q: keyword, count: 1 })
}

module.exports = {
    get: get
}

// get('trees')
// .then(function(res){
//   console.log(res.data.statuses);
// })

module.exports = router;
