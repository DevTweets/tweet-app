require('dotenv').config()
const router = require('express').Router()
const _ = require('lodash')
var unirest = require('unirest')
// var getTweets = require('./twitter')
const xMashapeKey = process.env.X_MASHAPE_KEY

module.exports = function(tweet){
  //return a promise
  return new Promise( function(resolve, reject){
    unirest.post("https://community-sentiment.p.mashape.com/text/")
    .header("X-Mashape-Key", xMashapeKey)
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Accept", "application/json")
    .send("txt=" + tweet)
    .end(function (result) {
      resolve({text: tweet, sentiment: result.body.result.sentiment})
    })
  })

}


// var array = ["good day", "bad day", "fantastic day"]
// var stuff = []
// for (var i = 0; i < array.length; i++) {
// var temp = array[i]
// unirest.post("https://community-sentiment.p.mashape.com/text/")
// .header("X-Mashape-Key", xMashapeKey)
// .header("Content-Type", "application/x-www-form-urlencoded")
// .header("Accept", "application/json")
// .send("txt=" + array[i])
// .end(function (result) {
//   // console.log(result.body.result.sentiment);
//   stuff.push({text: temp, sentiment:result.body.result.sentiment})
//   console.log(stuff)
// });
// console.log(temp)
// }
//
// console.log(stuff)

// for (var i = 0; i < array.length; i++) {
//   .send(`txt=${array[i]}`)
// }
