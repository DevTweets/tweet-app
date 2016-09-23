var assert = require('cucumber-assert')
var Url = require('url')
var extend = require('xtend')

var config = require('../../config')

module.exports = function () {

  this.Given('I am viewing the page at "$string"', function (pathname) {
    console.log('pathname', pathname)
    browser.url(`http://localhost:5050${pathname}`) // hardcoded localhost
    // real world example below
    // browser.url(Url.format(extend(config.proxy, { pathname: pathname })))
  })
  this.Given('I can see the input with the value "$string"', function (text, callback) {
    var listItemExists = browser.waitForExist(`input[value=${text}]`)
    assert.equal(listItemExists, true, callback)
  })

  this.When('I enter "$string" into the "$string" input', function (value, name) {
    browser.setValue(`input[placeholder="${name}"]`, value)
  })

  this.When('I click on the input with value "$string"', function (value) {
    browser.click(`input[value="${value}"]`)
  })

  this.Then('I can see the h1 "$string"', function (text, callback) {
    var h1ItemExists = browser.waitForExist(`h1=${text}`)
    assert.equal(h1ItemExists, true, callback)
  })

  this.Then('I am redirected to the "$string" page', function (pathname, callback) {
    browser.waitForExist('body')
    var url = browser.getUrl()
    assert.equal(Url.parse(url).pathname, pathname, callback)
  })
}
