var express = require('express');
var router = express.Router();
var getTweets = require('../apis/twitter')
var _ = require('lodash')
// twitter API

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tweets', { title: 'Avalanche' });
});

router.get('/tweets/all', function(req, res, next) {
  getTweets(req.query.keyword)
    .then(function (result) {
      console.log(result.data.statuses)
      var cleanTweets = _.map(result.data.statuses, function(arrayItem) {
        return { text: arrayItem.text }
      })
      return res.render('tweets', { title: 'Avalanche', tweets: cleanTweets})
    })
});

module.exports = router
