const {
  addPlugins,
  createConfig,
  customConfig,
  env,
  entryPoint,
  setOutput,
  sourceMaps
} = require('@webpack-blocks/webpack2')
const babel = require('@webpack-blocks/babel6')
const postcss = require('@webpack-blocks/postcss')
const cssModules = require('@webpack-blocks/css-modules')
const extractText = require('@webpack-blocks/extract-text2')
const webpack = require('webpack')
const DirectoryNamedPlugin =  require('directory-named-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')

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

const babili = () => (context) => ({
  plugins: [
    new BabiliPlugin()
  ]
})

module.exports = createConfig([
  entryPoint('./src/index.js'),
  setOutput('./public/bundle.js'),
  babel(),
  postcss(),
  cssModules(),
  addPlugins([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    })
  ]),
  env('development', [
    sourceMaps()
  ]),
  env('production', [
    babili()
  ]),
  directoryNamed(),
  customResolve(),
  extractText('style.css'),
  customConfig({
    stats: {
      children: false
    }
  })
])
