'use strict';

var LOGIN = require('../constants').action.LOGIN;
var LOGOUT = require('../constants').action.LOGOUT;


//LOGIN, LOGOUT
var login = function () {
	return {
		type: LOGIN
	}
}

var logout = function () {
	return {
		type: LOGOUT
	}
}

module.exports = {
	logout: logout,
	login: login
}
