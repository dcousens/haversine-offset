const haversineDistance = require('haversine-distance')
const haversineOffset = require('../')

const fixtures = require('./fixtures')
const tape = require('tape')

function round3 (x) {
  return Math.round(x * 1e3) / 1e3
}

for (const f of fixtures) {
  tape('returns ' + JSON.stringify(f.expected) + ' for offset distance of ' + f.distance, function (t) {
    const result = haversineOffset(f.position, f.offset)
    const distance = haversineDistance(f.position, result)

    t.plan(3)
    t.ok(round3(result.lat) === f.expected.lat, `${result.lat} ~= ${f.expected.lat}`)
    t.ok(round3(result.lng) === f.expected.lng, `${result.lng} ~= ${f.expected.lng}`)
    t.ok(round3(distance) === f.distance, `${distance} ~= ${f.distance}`)
  })
}
