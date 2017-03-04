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

let moment = require('moment')
let today = moment(new Date()).locale('ru')

alert(today.format('DD MMMM YYYY'))
