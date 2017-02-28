"use strict"

document.getElementById('loginButton').onclick = function () {
  require.ensure([], function(require) {
    let login = require('./login')

    login()
  }, 'auth');

}

document.getElementById('logoutButton').onclick = function () {
  require.ensure([], function(require) {
    let logout = require('./logout')

    logout()
  }, 'auth');

}

let moduleName = location.pathname.slice(1);
let route = require('./routes' + moduleName );
route()
