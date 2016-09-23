require('dotenv').config()
const router = require('express').Router()
const _ = require('lodash')
const xMashapeKey = process.env.X_MASHAPE_KEY

unirest.post("https://community-sentiment.p.mashape.com/text/")
.header("X-Mashape-Key", "UseI86IVI3mshnTV8ZFaplX4cPtHp1BjrdAjsnfrLdvCCD5VEI")
.header("Content-Type", "application/x-www-form-urlencoded")
.header("Accept", "application/json")
.send("txt=Today is  a good day")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
