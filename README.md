# Node.js GTFS Realtime Bindings

*This package is based on [Google’s older `gtfs-realtime-bindings`](https://www.npmjs.com/package/gtfs-realtime-bindings) 
and is now supported by [Cyberscape](https://github.com/cscape)*

This package provides JavaScript classes generated from the
[GTFS Realtime](https://developers.google.com/transit/gtfs-realtime/) Protocol
Buffer specification. These classes will allow you to parse a binary Protocol
Buffer GTFS Realtime data feed into JavaScript objects.

We use the [protobuf.js](https://github.com/protobufjs/protobuf.js) library for
JavaScript Protocol Buffer support.

## Install

To use the `gtfs-rb` classes in your own project, you need to
first install our [Node.js npm package](https://www.npmjs.com/package/gtfs-rb):

```
npm install gtfs-rb
```

## Example Code

See the [examples](https://github.com/cscape/gtfs-rb/tree/master/examples)


## Note

For more details on the naming conventions for the Javascript classes generated
from the
[gtfs-realtime.proto](https://developers.google.com/transit/gtfs-realtime/gtfs-realtime-proto),
check out the [protobuf.js project](https://github.com/dcodeIO/protobuf.js/wiki)
which we use to handle our Protocol Buffer serialization.

## Contributing

Please feel free to open a [pull request](https://github.com/cscape/gtfs-rb) so we 
can have more examples and better documentation on this project!

## LICENSE

[MIT](LICENSE) © 2019 [Cyberscape](https://cyberscape.co/)  
[Apache 2.0](LICENSE) © 2015 [Alphabet Inc.](https://abc.xyz/) (formerly Google Inc.)
