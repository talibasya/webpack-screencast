# Webpack screencast
Video tutorial how to use **webpack** package.
## 2 simple deploy
Create first project, add global package `webpack` and add config file.
`webpack --help` - show list arguments (the same setting are in config, so you can use config file for setup **webpack**).
## 3 simple deploy - get access to module
Get method from static html file
## 4 simple deploy - rebuild
`watch` property in config file will check changes in source.
You can modify `watchOptions` properties.
## 5 simple deploy - source maps
Describe `devtool` property.
## 6 simple deploy - variable NODE_ENV
Get variable `NODE_ENV` and add plugin `EnvironmentPlugin` from `webpack` package.
## 7 simple deploy - babel.js
Add `babel` loader.
Command `npm repo babel-loader` opens **github** repo.
For `loaders` you can put:
- `include` (checking path with prefix) or
- `test` file extention
- `exclude` - except files

Install babels packages (see `package.json`).
Have to find how `babel-runtime` as plugin works in **webpack**.
## 8 simple deploy - resolving
Add two parameters `resolve` and `resolveLoader`. They are rules how to seek modules, loaders.
`resolve.alias` - find module using specific path.
## 9 simple deploy - minification
Add minification plugin for `production` type.
## 10 several scripts - several endpoints
Proper configure files and set their position on work directory.
Update `webpack.config.js` file:
- `entry`  - change with array;
- `output` - set template for output files.
- `context` - set directory as default for webpack urls
