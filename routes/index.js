var express = require('express');
var router = express.Router();
var getTweets = require('../apis/twitter')
var getSentiment = require('../apis/sentiment')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tweets', { title: 'Avalanche' });
});

// router.get('/tweets/all', function(req, res, next) {
//   getTweets(req.query.keyword)
//     .then(function (result) {
//       console.log(result.data)
//       return res.render('tweets', { title: 'Avalanche', tweets: result.data.statuses})
//     })
// })

router.get('/tweets/all', function(req, res, next) {
  getTweets(req.query.keyword)
  .then(function (tweets) {
      var promises = tweets.map(function (tweet) { return getSentiment(tweet.text)})
      return Promise.all(promises)
  })
  .then(function(tweetsInfo){
    return res.render('tweets', { title: 'Avalanche', tweets: tweetsInfo})
  })
})

// router.get('tweets/all/sentiment', function(req, res, next){
//   getTweets(req.query.keyword)
//   .then(function (tweets) {
//       var promises = tweets.map(function (tweet) { return getSentiment(tweet.text)})
//       return Promise.all(promises)
//   })
// })

module.exports = router
