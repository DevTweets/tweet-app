require('dotenv').config()
const router = require('express').Router()
const _ = require('lodash')
const Twit = require('twit')
const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET

})

// const keys = {
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
//   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// }

// class twitter {
//   getTweets(endpoint){
//     var deferred = Promise.defer()
//
//     fetch(endpoint, keys, { q: 'donkey', count: 10})
//       .then((data) => {
//           deferred.resolve(data)
//       })
//       return deferred.promise
//     }
//   }
module.exports = {
    get: function(keyword) {
      T.get('search/tweets', { q: keyword, count: 10 }, function(err, data, response) {
        return data
    })
  }
}

// class twitter {
//   getTweets(){
//     var deferred = Promise.defer()
//     T.get('search/tweets', { q: 'donkey', count: 10 })
//       .catch(function (err) {
//       console.log('caught error', err.stack)
//       })
//       .then(function (result){
//       return deferred.promise
//       console.log('data', result.data);
//     })
//     }
// }


module.exports = router
// module.exports = new twitter
