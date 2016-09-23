var express = require('express');
var router = express.Router();
var getTweets = require('../apis/twitter')
// twitter API

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tweets', { title: 'Avalanche' });
});

router.get('/tweets/all', function(req, res, next) {
  getTweets(req.query.keyword)
    .then(function (result) {
      console.log(result.data)
      return res.render('tweets', { title: 'Avalanche', tweets: result.data.statuses})
    })
});

module.exports = router
