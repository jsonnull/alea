const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DirectoryNamedPlugin =  require('directory-named-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
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
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new ExtractTextPlugin('style.css')
  ],
  stats: {
    children: false
  }
}

if (process.env.NODE_ENV == 'production') {
  config.plugins.push(new BabiliPlugin())
}

module.exports = config
