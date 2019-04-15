const pbjs = require('protobufjs/cli/pbjs')
const { readFileSync, writeFileSync } = require('fs')

// Do not output to stdout
const args = [
  '--target', 'static-module',
  '--wrap', 'commonjs',
  // '--out', './exports.js',
  './gtfs-realtime.proto'
]

const runner = () => new Promise(
  (resolve, reject) => pbjs.main(args, (err, output) => err ? reject(err) : resolve(output))
)

const removeFirstLine = text => text.replace(/^(.){0,}(\n){1}/, '')
const prepend = (p, text) => p + '\n' + text

const getLicense = () => readFileSync('./LICENSE', 'utf8')
  .split('\n')
  .map(a => a.length > 0 ? `// ${a}` : '//')
  .join('\n')

runner()
  .then(o => {
    o = removeFirstLine(o)
    o = prepend(getLicense() + '\n', o)
    o = prepend(`// THIS IS AN AUTO-GENERATED FILE, DO NOT MANUALLY MODIFY\n`, o)
    writeFileSync('./exports.js', o, 'utf8')
    console.log('Finished building exports')
  })
