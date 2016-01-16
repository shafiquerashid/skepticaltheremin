'use strict';

var _ = require('lodash');

var NAV_RACE = require('../constants').action.NAV_RACE;
var NAV_SUMMARY = require('../constants').action.NAV_SUMMARY;
var NAV_CREATE_RACE = require('../constants').action.NAV_CREATE_RACE;
var NAV_CREATED_RACES = require('../constants').action.NAV_CREATED_RACES;
var CREATE = require('../constants').view.CREATE;
var RACE = require('../constants').view.RACE;
var SUMMARY = require('../constants').view.SUMMARY;
var CREATED_RACE_LIST = require('../constants').view.CREATED_RACE_LIST;


function viewReducer (state, action) {
  state = state || CREATE;
	switch (action.type) {
		case NAV_CREATE_RACE:
			return CREATE;
		case NAV_CREATED_RACES:
			return CREATED_RACE_LIST
		case NAV_RACE:
			return RACE;
		case NAV_SUMMARY:
			return SUMMARY
		default:
			return state;
	}
}

module.exports = viewReducer;
