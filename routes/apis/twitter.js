require('dotenv').config()
const Twit = require('twit')
const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY || TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY || TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || TWITTER_ACCESS_TOKEN_SECRET
})

console.log(process.env);
const router = require('express').Router()
const _ = require('lodash')

T.get('search/tweets', { q: 'donkey', count: 10 }, function(err, data, response) {
  console.log(data)
})



module.exports = router
