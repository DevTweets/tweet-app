const test = require('tape')
const testData = require('./test-data')
//
// url needed to give testData result 'https://api.twitter.com/1.1/search/tweets.json?q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4'

test('test setup working', function (t) {
  t.pass()
  t.end()
})

test('We got tweets', function(t) {
  var expected = {}
  var actual = getTweets()
  t.equal(actual, testData, "Winner winner" )
  t.end()
})

test('We got tweets happy', function(t) {
  var expected = {}
  var actual = getTweets()
  t.equal(actual, testData, "Winner winner" )
  t.end()
})
