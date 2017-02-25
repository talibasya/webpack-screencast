 'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

 module.exports = {
   context: __dirname + '/frontend'
   entry: {
     home: './home',
     about: './about'
   },
   output: {
     path: __dirname + '/public',
     filename: '[name].js',
     library: "[name]"
   },
   watch: NODE_ENV === "development",
   watchOptions: {
     aggregateTimeout: 200 // defalut 300
   },

   devtool: NODE_ENV === 'development' ? "cheap-inline-module-source-map" : null, // "inline-source-map" // 'source-map'
   plugins: [
    //  new webpack.EnvironmentPlugin('NODE_ENV', 'USER')
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: [ 'es2015' ]
      }
    }]
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extention: ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extentions: ['', '.js']
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
