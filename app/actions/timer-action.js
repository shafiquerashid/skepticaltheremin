'use strict';

var TIMER_START = require('../constants').action.type;
var TIMER_FINISH = require('../constants').action.type;

 // TIMER_START, TIMER_FINISH

// module.exports.timerStart = function () {
// 	return {

// 	}
// }

var timerFinish = function () {
	return {
		type: TIMER_FINISH
	}
}

module.exports = {
	timerFinish: timerFinish
}