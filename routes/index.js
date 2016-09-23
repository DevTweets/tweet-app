var express = require('express');
var router = express.Router();
var twitter = require('./apis/twitter')
// twitter API
const Twit = require('twit')
const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

function getTweets (keyword) {
  return T.get('search/tweets', { q: keyword, count: 50 })
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tweets', { title: 'Avalanche' });
});

router.get('/tweets/all', function(req, res, next) {
  getTweets(req.query.keyword)
    .then(function (result) {
      return res.render('tweets', { title: 'Tweet App: Avalanche', tweets: result.data.statuses})
    })
});

module.exports = router
