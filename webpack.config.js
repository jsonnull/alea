const { resolve } = require('path')
const webpack = require('webpack')
const DirectoryNamedPlugin =  require('directory-named-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')

module.exports = {
  entry: {
    'app': [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ],
    'vendor': [
      'react',
      'react-dom',
      'firebase', 'firebase/auth', 'firebase/database', 'firebase/app',
      'redux',
      'react-redux'
    ]
  },
  output: {
    filename: '[name].js',
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
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader:'file-loader',
          options: {
            outputPath: 'img/'
          }
        }]
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
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new InlineManifestWebpackPlugin({
      name: 'webpackManifest'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'public'),
    publicPath: '/',
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' }
      ]
    }
  },
  stats: {
    children: false
  }
}
