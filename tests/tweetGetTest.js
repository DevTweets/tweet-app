const test = require('tape')
// const testData = require('./test-data')

const testUrl = 'https://api.twitter.com/1.1/search/tweets.json?q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4'

test('test setup working', function (t) {
  t.pass("test working")
  t.end()
})

// test('We got tweets', getTweets(testUrl){
//   if ('getTweetsReturn' === testData){
//   t.pass()
//   }
//   t.end()
// })
