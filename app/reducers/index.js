'use strict';

var combineReducers = require('redux').combineReducers;

var reducers = {
  user: require('./user-reducer'), //{id, isLoggedIn, currentLocation, availableRaces, createdRaces }
  newRace: require('./new-race-reducer'), // { name, dateTime, waymarks, latitude, longitude }
  activeRace: require('./active-race-reducer'), // { waitTimeRemaining racers, raceWaymarks, checkedIn, startTime, ended, completed, cancelled }
  view: require('./view-reducer') // {create, race, summary, createdRaceList }
};

module.exports = combineReducers(reducers);

