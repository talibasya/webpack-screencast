 'use strict';

 module.exports = {
   entry: './home',
   output: {
    //  path: __dirname + '/dist',
     filename: 'build.js',
     library: "home"
   },
   watch: true,
   watchOptions: {
     aggregateTimeout: 200 // defalut 300
   }
 }
