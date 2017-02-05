const {
  createConfig,
  defineConstants,
  env,
  entryPoint,
  setOutput,
  sourceMaps
} = require('@webpack-blocks/webpack')
const babel = require('@webpack-blocks/babel6')
const postcss = require('@webpack-blocks/postcss')
const cssModules = require('@webpack-blocks/css-modules')

module.exports = createConfig([
  entryPoint('./src/index.js'),
  setOutput('./public/bundle.js'),
  babel(),
  postcss(),
  cssModules(),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV
  }),
  env('development', [
    sourceMaps()
  ])
])
