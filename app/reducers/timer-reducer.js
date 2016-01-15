var _ = require('lodash');

var TIMER_FINISH = require('../constants').action.TIMER_FINISH;

function timerFinish (state, action) {
	switch (action.type) {
		case TIMER_FINISH:
			return _.extend({}, state, {
				activeRace: {
					started: true
				}
			});
		default:
			return state;
	}
}

module.exports = timerFinish;