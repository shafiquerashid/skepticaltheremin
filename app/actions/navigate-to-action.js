'use strict';

var type = require('../constants').action.type;
var NAV_CREATE_RACE = require('../constants').action.NAV_CREATE_RACE;
var NAV_CREATED_RACES = require('../constants').action.NAV_CREATED_RACES;
var NAV_RACE = require('../constants').action.NAV_RACE;
var NAV_SUMMARY = require('../constants').action.NAV_SUMMARY;

  //NAV_CREATE_RACE, NAV_CREATED_RACES,
  //NAV_SUMMARY, NAV_RACE

var navigateCreateRace = function () {
	return {
		type: NAV_CREATE_RACE
	}
}

var navigateCreatedRaces = function () {
	return {
		type: NAV_CREATED_RACES
	}
}

var navigateRace = function () {
	return {
		type: NAV_RACE
	}
}

var navSummary = function () {
	return {
		type: NAV_SUMMARY
	}
}