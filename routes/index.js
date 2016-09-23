var express = require('express');
var router = express.Router();
var getTweets = require('../apis/twitter')
var getSentiment = require('../apis/sentiment')
var _ = require('lodash')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Avalanche' });
});

// router.get('/tweets/all', function(req, res, next) {
//   getTweets(req.query.keyword)
//     .then(function (result) {
//       console.log(result.data)
//       return res.render('tweets', { title: 'Avalanche', tweets: result.data.statuses})
//     })
// })

router.get('/tweets/all', function(req, res, next) {
  // if we were to have client-side rendering
  // if (req.query === '') {
  //   return
  // } else {
  getTweets(req.query.keyword)
  .then(function (tweets) {
      var cleanTweets = _.map(tweets.data.statuses, function(arrayItem) {
        return { text: arrayItem.text }
    })
    return cleanTweets
  })
    .then(function (cleanTweets) {
      var promises = cleanTweets.map(function (tweet) { return getSentiment(tweet.text)})
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
// Hik and Steve
//     .then(function (result) {
//       console.log(result.data.statuses)
//       var cleanTweets = _.map(result.data.statuses, function(arrayItem) {
//         return { text: arrayItem.text }
//       })
//       return res.render('tweets', { title: 'Avalanche', tweets: cleanTweets})
//     })
//   // }
// })

module.exports = router
