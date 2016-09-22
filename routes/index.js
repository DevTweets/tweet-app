var express = require('express');
var router = express.Router();
var twitter = require('./apis/twitter')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render();
  // res.render(getTweets())
});

router.get('/tweets/all', function(req, res, next) {
  console.log("Hello")

  twitter.get('lemon')
    .then(function (tweets) {
      console.log(tweets);
      res.render('tweets', { title: 'Tweet App: Avalanche', tweets: tweets });
    })
});

module.exports = router
