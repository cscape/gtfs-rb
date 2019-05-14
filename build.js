const { pbjs, pbts } = require('protobufjs/cli')
const { readFileSync, writeFileSync } = require('fs')

const EXPORTS_FILENAME = 'exports'
const EXPORTS_PATH = `./${EXPORTS_FILENAME}`
const EXPORTS_FULL = `${EXPORTS_PATH}.js`

// Do not output to stdout
const args = [
  '--target', 'static-module',
  '--wrap', 'commonjs',
  '--force-long', // use Long, always
  // '--out', './exports.js',
  './gtfs-realtime.proto'
]

// resolves the compiled JS file contents
const runner = () => new Promise(
  (resolve, reject) => pbjs.main(args, (err, output) => err ? reject(err) : resolve(output))
)

// resolves the typescript definitions file contents
const runnerTS = compiledJSFilePath => new Promise(
  (resolve, reject) => pbts.main([compiledJSFilePath], (err, output) => err ? reject(err) : resolve(output))
)

const removeFirstLine = text => text.replace(/^(.){0,}(\n){1}/, '')
const prepend = (p, text) => p + '\n' + text

// reads the LICENSE file and comments the code for JS
const getLicense = () => readFileSync('./LICENSE', 'utf8')
  .split('\n')
  .map(a => a.length > 0 ? `// ${a}` : '//')
  .join('\n')

console.log('Compiling protobuf')
runner()
  .then(o => {
    o = removeFirstLine(o)
    o = prepend(getLicense() + '\n', o)
    o = prepend(`// THIS IS AN AUTO-GENERATED FILE, DO NOT MANUALLY MODIFY\n`, o)
    writeFileSync(EXPORTS_FULL, o, 'utf8')
    console.log('Finished building JS exports')
  })
  .then(async () => runnerTS(EXPORTS_FULL))
  .then(o => {
    o = prepend(getLicense() + '\n', o)
    o = prepend(`// THIS IS AN AUTO-GENERATED FILE, DO NOT MANUALLY MODIFY\n`, o)
    writeFileSync(EXPORTS_PATH + '.d.ts', o, 'utf8')
    console.log('Finished building TypeScript definitions')
  })
