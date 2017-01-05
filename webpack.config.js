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

// function postcss (options) {
  // options = options || {}
  // const exclude = options.exclude || /\/node_modules\//

  // return (context) => ({
    // module: {
      // loaders: [
        // {
          // test: context.fileType('text/css'),
          // exclude: Array.isArray(exclude) ? exclude : [exclude],
          // use: [
            // { loader: 'style-loader' },
            // { loader: 'css-loader' },
            // {
              // loader: 'postcss-loader',
              // options: {
                // parser: options.parser,
                // stringifier: options.stringifier,
                // syntax: options.syntax
              // }
            // }
          // ]
        // }
      // ]
    // }
  // })
// }

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
