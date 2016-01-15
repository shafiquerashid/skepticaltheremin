var _ = require('lodash');

var CREATED_RACES_SUCCESS = require('../constants').action.CREATED_RACES_SUCCESS;
var SELECT_RACE = require('../constants').action.SELECT_RACE;

function createdRacesReducer (state, action) {
	switch (action.type) {
		case CREATED_RACES_SUCCESS:
			return _.extend({}, state, {
				user: {
					createdRaces: action.payload
				}
			});
		case SELECT_RACE:
			return _.extend({}, state, {
				activeRace: action.payload
			})
	}
}

module.exports = createdRacesReducer;