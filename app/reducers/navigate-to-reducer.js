'use strict';

var _ = require('lodash');

var NAV_CREATE_RACE = require('../constants').action.NAV_CREATE_RACE;
var CREATE = require('../constants').view.CREATE;
var RACE = require('../constants').view.RACE;
var SUMMARY = require('../constants').view.SUMMARY;
var CREATED_RACE_LIST = require('../constants').view.CREATED_RACE_LIST;

function navigateReducer (state, action) {
	switch (action.type) {
		case NAV_CREATE_RACE:
			return _.extend({}, state, {
				view: CREATE
			});
		case NAV_CREATED_RACES:
			return _.extend({}, state, {
				view: CREATED_RACE_LIST
			});		
		case NAV_RACE:
			return _.extend({}, state, {
				view: RACE
			});
		case NAV_SUMMARY:
			return _.extend({}, state, {
				view: SUMMARY
			});
		default:
			return state;
	}
}


