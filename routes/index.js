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
  return T.get('search/tweets', { q: keyword, count: 5 })
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tweets', { title: 'Tweet App: Avalanche' });
  // res.render(getTweets())
});

router.get('/tweets/all', function(req, res, next) {
  getTweets('something')
    .then(function (result) {
      console.log(result.data.statuses)
      return res.render('tweets', { title: 'Tweet App: Avalanche', tweets: result.data.statuses})
    })
    // .then(function (data) {
    //   res.render('tweets', { title: 'Tweet App: Avalanche', tweets: data})
    // })
});

module.exports = router

// twitter.get('lemon')
//   .then(function (tweets) {
//     var data = tweets[0].text
//     res.render('tweets', { title: 'how about this', tweets: data });
//   })
