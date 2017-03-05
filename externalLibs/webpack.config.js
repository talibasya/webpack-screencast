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
     new webpack.ProvidePlugin({
       lodashCollectionSortBy: 'lodash/sortBy'
     })
  ],

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
