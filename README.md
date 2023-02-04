# haversine-offset
[![Version](http://img.shields.io/npm/v/haversine-offset.svg)](https://www.npmjs.org/package/haversine-offset)
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Haversine offset formula in Javascript, in meters, nothing else


## Example

Offset is in meters, `x` is along the longitudinal axis (East / West), `y` along the latitudinal axis (North / South).

``` javascript
const haversineOffset = require('haversine-offset')

const a = { latitude: -37.8136, longitude: 144.9631 }
const offset = { x: 100, y: 150 }

console.log(haversineOffset(a, offset))
// { lat: -37.812252527073824, lng: 144.96423709426978 },
```

`lat`, `lng` works too:

``` javascript
const haversineOffset = require('haversine-offset')

const a = { lat: -37.8136, lng: 144.9631 }
const offset = { x: 100, y: 150 }

console.log(haversineOffset(a, offset))
// { lat: -37.812252527073824, lng: 144.96423709426978 },
```


## LICENSE [MIT](LICENSE)
