var _ = require('lodash');

var LOCATION_CHANGE = require('../constants').action.LOCATION_CHANGE;

function locationChangeReducer (state, action) {
	switch (action.type) {
		case LOCATION_CHANGE:
			return _.extend({}, state, {
				user:{
					currentLocation: action.payload.currentLocation	
				}
			});
	}
}