'use strict'

var test = require('tape')
var EventTarget = require('dom-event-target')
var proxyquire = require('proxyquire')

test('node', function (t) {
  var onLoad = require('./')
  t.doesNotThrow(onLoad)
  t.end()
})

test('browser', function (t) {
  t.plan(2)

  var document = {}
  var window = new EventTarget()

  var onLoad = proxyquire('./', {
    'global/document': document,
    'global/window': window
  })

  onLoad(t.pass)
  window.send('load')

  document.readyState = 'complete'
  onLoad(t.pass)
})
