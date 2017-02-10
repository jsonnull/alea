const {
  createConfig,
  defineConstants,
  env,
  entryPoint,
  setOutput,
  sourceMaps
} = require('@webpack-blocks/webpack2')
const babel = require('@webpack-blocks/babel6')
const postcss = require('@webpack-blocks/postcss')
const cssModules = require('@webpack-blocks/css-modules')
const extractText = require('@webpack-blocks/extract-text2')
const DirectoryNamedPlugin =  require('directory-named-webpack-plugin')

const directoryNamed = () => (context) => ({
  resolve: {
    plugins: [
      new DirectoryNamedPlugin()
    ]
  }
})

const customResolve = () => (context) => ({
  resolve: {
    modules: ['node_modules', 'src']
  }
})

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
  ]),
  directoryNamed(),
  customResolve(),
  extractText('style.css')
])
