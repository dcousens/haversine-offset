const cos = Math.cos
const PI = Math.PI

// (mean) radius of Earth (meters)
const R = 6378137

function fromRad (x) { return x * 180.0 / PI }
function toRad (x) { return x * PI / 180.0 }

module.exports = function haversineOffset (a, offset) {
  var aLat = a.latitude || a.lat
  var aLng = a.longitude || a.lng
  var x = offset.x
  var y = offset.y

  var dLat = y / R
  var dLng = x / (R * cos(toRad(aLat)))

  return {
    lat: aLat + fromRad(dLat),
    lng: aLng + fromRad(dLng)
  }
}
