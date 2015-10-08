# haversine-offset

[![build status](https://secure.travis-ci.org/dcousens/haversine-offset.png)](http://travis-ci.org/dcousens/haversine-offset)
[![Version](http://img.shields.io/npm/v/haversine-offset.svg)](https://www.npmjs.org/package/haversine-offset)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Haversine offset formula in Javascript.  Uses meters.  Nothing more.


## Example

Offset is in meters, `x` is along the longitudinal axis (East / West), `y` along the latitudinal axis (North / South).

``` javascript
var haversineOffset = require('haversine-offset')

var a = { latitude: -37.8136, longitude: 144.9631 }
var offset = { x: 100, y: 150 }

console.log(haversineOffset(a, offset))
// { lat: -37.812252527073824, lng: 144.96423709426978 },
```

`lat`, `lng` variants will also work:

``` javascript
var haversineOffset = require('haversine-offset')

var a = { lat: -37.8136, lng: 144.9631 }
var offset = { x: 100, y: 150 }

console.log(haversineOffset(a, offset))
// { lat: -37.812252527073824, lng: 144.96423709426978 },
```


## License [MIT](LICENSE)

