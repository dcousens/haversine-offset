/* global describe, it */

var assert = require('assert')
var haversineOffset = require('../')
var haversineDistance = require('haversine-distance')
var fixtures = require('./fixtures')

describe('haversine', function () {
  fixtures.forEach(function (f) {
    it('returns ' + JSON.stringify(f.expected) + ' for offset distance of ' + f.distance, function () {
      var result = haversineOffset(f.position, f.offset)
      var distance = haversineDistance(f.position, result)

      assert.deepEqual(result, f.expected)
      assert.equal(distance, f.distance)
    })
  })
})
