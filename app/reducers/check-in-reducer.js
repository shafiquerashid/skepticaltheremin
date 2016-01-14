var _ = require('lodash');

var CHECK_IN = require('../constants').action.CHECK_IN;

function checkInReducer (state, action) {
	switch(action.type){
		case CHECK_IN:
			return _.extend({}, state, {
				activeRace:{
					checkedIn: true
				}
			})
	}
}
