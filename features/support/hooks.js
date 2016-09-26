const config = require('../../config')
let server

module.exports = function () {

  this.registerHandler('BeforeFeatures', (features, callback) => {
    const App = require('../../app')
    const testData = require('../../tests/test-data')
    const app = App({
      getTweets: (keyword) => (
        new Promise((resolve) => resolve({
          data: testData
        })) 
      ),
      getSentiment: (text) => (
        new Promise((resolve)=> resolve({
          text: 'Piet',          
          sentiment: 'Overwhelmingly positive'
        })) 
      )
    })
    console.log('server starting....')
    server = app.listen(config.proxy.port, () => {
      callback()
    })
  })

  this.registerHandler('AfterFeatures', (features, callback) => {
    console.log('server stopping....')
    server.close()
    callback()
  })
}
