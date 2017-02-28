"use strict"

document.getElementById('loginButton').onclick = function () {
  require.ensure([], function(require) {
    let login = require('./login')

    login()
  });

}
