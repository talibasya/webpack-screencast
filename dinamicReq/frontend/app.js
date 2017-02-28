"use strict"

document.getElementById('loginButton').onclick = function () {
  require.ensure(['./login'], function(require) {
    let login = require('./login')

    login()
  });

}
