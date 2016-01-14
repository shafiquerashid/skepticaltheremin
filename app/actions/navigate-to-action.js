'use strict';

var type = require('../constants').action.type;

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