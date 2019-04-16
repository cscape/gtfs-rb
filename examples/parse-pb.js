const gtfsRB = require('../exports').transit_realtime
const { readFileSync } = require('fs')

// Deconstruct these classes from GTFS Realtime Bindings
const { FeedMessage } = gtfsRB

const rawFeed = readFileSync('./SampleFeed.pb') // buffer

const decodedMessage = FeedMessage.decodeDelimited(rawFeed)

console.log(decodedMessage)
