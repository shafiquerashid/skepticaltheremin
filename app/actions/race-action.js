'use strict';

var START_RACE = require('../constants').action.START_RACE;
var FINISH_RACE = require('../constants').action.FINISH_RACE;
var CANCEL_RACE = require('../constants').action.CANCEL_RACE;

// START_RACE, FINISH_RACE, CANCEL_RACE

var startRace = function () {
	//socket connection should be made here.

	return {
		type: START_RACE
	}
}

var finishRace = function () {
	//user should be pass into results array of activeRace
	//completed should be true
	//should put the most recent version of race model
}

var cancelRace = function () {
	return {
		type
	}
}

module.exports = {
	startRace: startRace,
	finishRace: finishRace,
	cancelRace: cancelRace
}