# Node.js GTFS Realtime Bindings (gtfs-rb)

This package provides JavaScript classes generated from the
[GTFS Realtime](https://developers.google.com/transit/gtfs-realtime/) Protocol
Buffer specification. These classes will allow you to parse a binary Protocol
Buffer GTFS Realtime data feed into JavaScript objects.

We use the [protobuf.js](https://github.com/protobufjs/protobuf.js) library for
JavaScript Protocol Buffer support.

## Install

To use the `gtfs-realtime-bindings` classes in your own project, you need to
first install our [Node.js npm package](https://www.npmjs.com/package/gtfs-realtime-bindings):

```
npm install gtfs-realtime-bindings
```

## Example Code

The following Node.js code snippet demonstrates downloading a GTFS-realtime
data feed from a particular URL, parsing it as a FeedMessage (the root type of
the GTFS-realtime schema), and iterating over the results.

```javascript
var GtfsRealtimeBindings = require('gtfs-realtime-bindings');
var request = require('request');

var requestSettings = {
  method: 'GET',
  url: 'URL OF YOUR GTFS-REALTIME SOURCE GOES HERE',
  encoding: null
};
request(requestSettings, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var feed = GtfsRealtimeBindings.FeedMessage.decode(body);
    feed.entity.forEach(function(entity) {
      if (entity.trip_update) {
        console.log(entity.trip_update);
      }
    });
  }
});
```

For more details on the naming conventions for the Javascript classes generated
from the
[gtfs-realtime.proto](https://developers.google.com/transit/gtfs-realtime/gtfs-realtime-proto),
check out the [protobuf.js project](https://github.com/dcodeIO/protobuf.js/wiki)
which we use to handle our Protocol Buffer serialization.

## LICENSE

[MIT](LICENSE) © 2019 [Cyberscape](https://cyberscape.co/)  
[Apache 2.0](LICENSE) © 2015 [Alphabet Inc.](https://abc.xyz/) (formerly Google Inc.)
