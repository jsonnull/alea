const { resolve } = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DirectoryNamedPlugin =  require('directory-named-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')

module.exports = {
  entry: {
    'app': './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [ /\/node_modules\// ],
        use: ['babel-loader?cacheDirectory']
      },
      {
        test: /\.css*/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=1',
            'postcss-loader'
          ]
        })
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src'],
    plugins: [
      new DirectoryNamedPlugin()
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('style.css'),
    new BabiliPlugin()
  ],
  stats: {
    children: false
  }
}
