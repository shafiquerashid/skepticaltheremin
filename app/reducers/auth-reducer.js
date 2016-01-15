var _ = require('lodash');

var LOGIN = require('../constants').action.LOGIN;
var LOGOUT = require('../constants').action.LOGOUT;

function loginReducer (state, action) {
	switch (action.type) {
		case LOGIN:
			return _.extend({}, state, {
				user:{
					isLoggedIn: true
				}
			});
		case LOGOUT:
			return _.extend({}, state, {
				user:{
					isLoggedIn: false
				}
			});
		default:
			return state;
	}
}

module.exports = loginReducer;