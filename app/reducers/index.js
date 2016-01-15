'use strict';

var combineReducers = require('redux').combineReducers;

var reducers = {
  user: require('./user-reducer'),
  newRace: require('./new-race-reducer'),
  activeRace: require('./active-race-reducer'),
  createdRacesReducer: require('./created-races-reducer'),
  navigateToReducer: require('./navigate-to-reducer'),
  checkInReducer: require('./check-in-reducer'),
  locationChangeReducer: require('./location-change-reducer'),
  timerReducer: require('./timer-reducer')
};

module.exports = combineReducers(reducers);




