'use strict'

var window = require('global/window')
var document = require('global/document')
var nextTick = require('next-tick')

module.exports = window.addEventListener ? onWindowLoad : noop

function onWindowLoad (callback) {
  if (document.readyState === 'complete') {
    return nextTick(callback)
  }

  window.addEventListener('load', function onLoad () {
    callback()
  })
}

function noop () {}
