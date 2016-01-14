/*
addOne -0
find --
findOne --
updateRace --
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

		var user_id = newRace.creator;
		User.findOneAndUpdate({user_id:user_id}, {$push:{createdRaces: race}}, function(err, result) {
			if (err) {
				callback(err);
				return;
			}
			callback(null, race);	
		});
	});
};

//Find race by user id || proximity AND TIME AHHHH, which comes in as a string LOL .-.
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
		var coords = [parseInt(searchParams.lat), parseInt(searchParams.lng)];
		var maxDistance = parseInt(searchParams.proximity)/6371;
		var date = searchParams.date; //string
		var time = searchParams.time; //string


		Race.find({start_loc: {$near: coords, $maxDistance: maxDistance}}, function (err, closebyRaces) {
			if (err) {
				callback(err);
				return;
			}
			//filter for ones that start the same day
			//filter for ones that start after && within time
			var closebyRacesToday = closebyRaces.filter(function (race) {
				if (race.date === date) {
					return true;
				}
			});
			
			var convertStringTimeToSeconds = function(string) {
				var timeArray = [];
				string = string.split('');

				for(var i = 0; i < string.length; i++) {
					if (i%2 === 0) {
						timeArray[i/2] = string[i];
					} else {
						timeArray[(i-1)/2] += string[i];
						timeArray[(i-1)/2] = parseInt(timeArray[(i-1)/2]);
					}
				}

				var totalSeconds = 0;
				for (var i = 0; i < timeArray.length; i++) {
					totalSeconds += timeArray[0]*Math.pow(60,(2-i));
				}
				return totalSeconds;
			}
			//returns races occuring in the next 30 minutes // should be specified later by a req.param
			time = convertStringTimeToSeconds(time);
			var closebyRacesTodaySoon = closebyRacesToday.filter(function (race) {
				if((convertStringTimeToSeconds(race.time)-time) < 3600) {
					return true;
				}
			});
			callback(null, closebyRacesTodaySoon);
		});
	}
}

exports.findOne = function (raceIdObj, callback) {
	Race.find(raceIdObj, function (err, race) {
		if (err) {
			callback(err);
			return;
		}
		callback(null, race);
	})
}

exports.updateRace = function (newRace, callback) {
	var race_id = newRace._id;
	Race.findOneAndUpdate({_id: race_id}, newRace, function (err, updatedRace) {
		if (err) {
			callback(err);
			return;
		}
		callback(null, updatedRace);
	});
}

