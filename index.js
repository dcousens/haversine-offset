const cos = Math.cos
const PI = Math.PI

// equatorial mean radius of Earth (in meters)
const R = 6378137

function fromRad (x) { return x * 180.0 / PI }
function toRad (x) { return x * PI / 180.0 }

function haversineOffset (a, offset) {
  const aLat = a.latitude || a.lat
  const aLng = a.longitude || a.lng
  const x = offset.x
  const y = offset.y

  const dLat = y / R
  const dLng = x / (R * cos(toRad(aLat)))

  return {
    lat: aLat + fromRad(dLat),
    lng: aLng + fromRad(dLng)
  }
}

module.exports = haversineOffset
