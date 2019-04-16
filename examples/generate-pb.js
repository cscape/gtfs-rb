const gtfsRB = require('../exports').transit_realtime
const { writeFileSync } = require('fs')

// Deconstruct these classes from GTFS Realtime Bindings
const { FeedMessage, FeedHeader, FeedEntity, VehiclePosition } = gtfsRB

const sampleEntity = new FeedEntity({
  id: `SomeUniqueBusID`,
  vehicle: new VehiclePosition({
    // Time when vehicle's position was recorded
    timestamp: 1555370000000
  })
})

const sampleFeed = new FeedMessage({
  header: new FeedHeader({
    gtfs_realtime_version: '2.0',
    timestamp: Date.now()
  }),
  entity: [
    // entities are within an array
    sampleEntity
  ]
})

// null if valid, otherwise a string with an error description
const verify = FeedMessage.verify(sampleFeed)

if (verify == null) {
  // Encodes feed and finishes the write stream (so it's sync)
  const buffer = FeedMessage.encodeDelimited(sampleFeed).finish()
  writeFileSync('./SampleFeed.pb', buffer)
} else {
  throw new Error(verify)
}
