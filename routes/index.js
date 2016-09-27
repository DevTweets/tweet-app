var express = require('express');
var router = express.Router();
var _ = require('lodash')

function Router(getTweets, getSentiment) {

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('layout', { title: 'Avalanche' });
  });

  router.get('/tweets/all', function(req, res, next) {
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
  return router

}

module.exports = Router
