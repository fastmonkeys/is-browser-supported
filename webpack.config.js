var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'is-browser-supported': './index',
    'is-browser-supported.min': './index'
  },
  output: {
    library: 'isBrowserSupported',
    libraryTarget: 'umd',
    filename: '[name].js',
    path: './dist'
  },
  module: {
    preLoaders: [
      {
        test: /\/caniuse-db\/data\.json$/,
        loader: path.resolve('./caniuse-db-loader')
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  node: {
    fs: 'empty',
    path: 'empty'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      include: /\.min\.js$/,
      minimize: true
    }),
    new webpack.IgnorePlugin(/caniuse-db\/region-usage-json/),
    new CleanWebpackPlugin(['dist'])
  ],
  devtool: '#source-map'
};
