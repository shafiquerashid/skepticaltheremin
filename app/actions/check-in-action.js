'use strict';
var timerAction = require('./timer-action.js');
var CHECK_IN = require('../constants').action.CHECK_IN;
// CHECK_IN, ENABLE_CHECK_IN

var checkIn = function () {
	dispatch(timerAction.timerStart())

	return {
		type: CHECK_IN
	}
}

module.exports = {
	checkIn: checkIn
}