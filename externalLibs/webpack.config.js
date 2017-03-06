 'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

 module.exports = {
   context: __dirname + '/frontend',
   entry: {
     app: './app',
   },
   output: {
     path: __dirname + '/public/js/',
     filename: '[name].js',
   },
   watch: NODE_ENV === "development",
   watchOptions: {
     aggregateTimeout: 200 // defalut 300
   },

   devtool: NODE_ENV === 'development' ? "cheap-inline-module-source-map" : null, // "inline-source-map" // 'source-map'
   plugins: [
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      // exclude: /\/node_modules\//,
      include: __dirname + '/frontend', // will perform only thess files
      loader: 'babel-loader'
    }, {
      test: /old\.js$/,
      loader: 'imports-loader?workSettins=>{delay:500}!exports-loader?Work'
    }],
    noParse: /angular\/angular\.js/
  },

  resolve: {
    modules: [__dirname + '/vendor'],
    alias: {
        old: 'old/dist/old'
    }
  }
 }

 if (NODE_ENV == 'production') {
   module.exports.plugins.push(
     new webpack.optimize.UglifyJsPlugin({
       compress: {
         warnings: false,
         drop_console: true,
         unsafe: true
       }
     })
   )
 }
