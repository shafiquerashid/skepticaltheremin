/*
addOne -- 
find
findOne
updateRace
findByProximity
*/

var mongoose = require('mongoose');

var mongoose = require('mongoose');
var User = require('../models/user.js');
var Pin = require('../models/pin.js');
var Race = require('../models/race.js');
var userController = require('../controllers/userController.js');


//Add one race
exports.addOne = function(newRace, callback) {
	Race.create(newRace, function (err, race) {
		if (err) {
			callback(err);
			return;
		}
		//get and append the race id to teh user
		callback(null, race);
	});
};

//Find race by user id || proximity .-.
exports.find = function(searchParams, callback) {

	//look for all races by user
	if (searchParams.lat !== undefined) {
		Race.find(searchParams, function (err, usersRaces) {
			if (err) {
				callback(err);
				return;
			}
			callback(null, usersRaces);
		})
	} else {
		Race.find({}//look by proximity


	}
}




