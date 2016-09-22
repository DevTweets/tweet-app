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
  res.render('tweets', { title: 'Tweet App: Avalanche' });
  // res.render(getTweets())
});

// var loadTweets = function(endpoint){
//    twitter.getTweets()
//     .then((data) =>{
//       res.render('index', { body: data })
//     })
//     .catch ((error) => {
//       console.log(error.message);
//     })
// }

// loadTweets('search/tweets')

//Get Tweets


module.exports = router;
