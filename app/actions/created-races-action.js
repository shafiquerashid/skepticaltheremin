'use strict';

var CREATED_RACES_SUCCESS = require('../constants').action.CREATED_RACES_SUCCESS;
var SELECT_RACE = require('../constants').action.SELECT_RACE;

//CREATED_RACES_SUCCESS, //SELECT_RACE
/*
[{Race}, {Race}]
*/
var createdRacesSuccess = function (payload) {
	return {
		type: CREATED_RACES_SUCCESS,
		payload: payload
	}
}

/*
{Race}
*/
var selectRace = function (payload) {
	return {
		type: SELECT_RACE,
		payload: payload
	}
} 

module.exports = {
	createdRacesSuccess: createdRacesSuccess,
	selectRace: selectRace
}