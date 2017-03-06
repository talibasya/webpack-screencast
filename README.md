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

## 11 several scripts - noErrorsPlugin
Add `noErrorsPlugin` to the project. It is essential for deploy. When `webpack` shows any error, it forbids deploy break files.
## 12 several scripts - CommonsChunkPlugin
`CommonsChunkPlugin` helps deploy scripts without double code for each module. The final files will include same modules from one file, not in own content.  
## 13 several scripts - about a build.
Command `webpack --display-modules` show paths where deployed files.
More details: `webpack --display-modules -v`
Create json file with information about build:
  1. `webpack --json --profile>stats.json`
  2. go to webpack.github.io/analyze and attach ur `stats.json` file
  3. Will see detail info about project, sturcture, packages, dependencies etc

## 14 several scripts - settings for CommonsChunkPlugin.
Prop `name` is required.
`minChunks` - the number of repeatedly modules, which will be as one chunk. (by default the module will be as chunk, when it been included in all endpoints). Can be as function.
`chunks` - set list files, where **webpack** seeks repeatedly scripts and makes chunks.
See documentation. So much arguments receive this package.
## 15 several scripts - joint code in common.js
Create new file - `common.js`.
put the script `alert('Hello')`. Webpack will add this code to `common.js` and this code will as common for libraries.
## 16 several scripts - multi-compile.
Refactor **webpack** configuration as multi builder - export config params as array:
```javascript
module.exports = [{}, {}, {}]
```
## 17 advanced require - dinamic require
An example is in directory `dinamicReq` cause it is different of older commits.
In this folder was implemented action, which load new file dinamically via `webpack`.
There are two methods: `require.ensure([...], callback)` and `reqire(['./login'], function(login) { login() })` (AMD method - less popular).
The next example with new feature:
```javascript
require.ensure([], function(require) {
  let login = require('./login')

  login()
})
```
*You have to add `publicPath` parameter for this implementation*

## 18 advanced require - join fragments
Join `logout` and `login` fragments as one file using third parameter for `require.ensure()`.
Named chunks via `chunkFilename` parameter.
You can handle number of chunks by size, count etc. See docs.

## 19 advanced require - conditional require
Add folder `routes` with route and include dinamically.

## 20 advanced require - require context
Using `context` manually.

## 21 advanced require - dinamic require.context
Adding `require.ensure` to main module tells webpack that creation files will be dinamically.
U have create wrapper for each component. In this case each page will deploy as separate file and loads during working on client side.
It does a webpack package `bundle-loader`.
*Can't reproduce*

## 22 advanced require - ContextReplacementPlugin
Sometimes plugins includes own data via `context` (see desc 20/21). In this case whole package will deploy into one file and your js file takes much place (example in the source).
To avoid that u can use `ContextReplacementPlugin` and exclude some files from deploying. *file has been required via reg. expression as in 20,21 casts*
moment.js source:
```javascript
...
try {
  oldlocale = globallocate._abbr;
  require('./locale/' + name)
}
...
```
Add `ContextReplacementPlugin` and update webpack config file.

## 23 advanced require - IgnorePlugin
Exclude module from deploying by plugin `IgnorePlugin`. The arguments are regular expressions.
Probably can be used in reversed case. (include only some packages)
The `ignorePlugin` have specific implementation. It contains specify ways for check `require` lines. The `context` and `normal` conditional. *See source code*

## 24 external libraries - CDN and building
Was created a new `externalLibs` folder and implemented this cast.
Add external library as `lodash` via CDN and include to webpack building.

## 25 external libraries - local ProvidePlugin
Set variables as global from webpack config using `ProvidePlugin`.
*deprecated see docs*

## 26 external libraries - optimize noParse include
Deploying takes much time. Have to optimize `webpack`. The first is see more details about `webpack` deploying:
```
webpack --profile --display-modules --display-reasons
```
Will showed library and taked time for deploying.  **Total: 2.4 sec**.
Add `exclude` property for `babel-loader`, which contains `node_modules` directory. **Total: 782 msec**
Add `noParse` property to `webpack.config` file. **Total: 397msec**
Put value to `noParse` for whole `nod_modules` directory:
```javascript
noParse: /\/node_modules\/[^!]+$/
noParse: /\/node_modules\/(angular\/angular|jquery|...)/
```

## 27 external libraries - old scripts: paths and import/export
Add `vendor` directory with old scripts.
Add `resolve` param for `webpack`, which helps with *require* paths. More readable style.
Include to project old scripts (with global functions, variables) to own project using `exports-loader` and `imports-loader`
