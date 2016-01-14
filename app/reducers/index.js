'use strict';

var combineReducers = require('redux').combineReducers;

var rootReducer = combineReducers({
  user: require('./user-reducer'),
  newRace: require('./new-race-reducer'),
  activeRace: require('./active-race-reducer'),
  uiReducer: require('./ui-reducer')
});

module.exports = rootReducer
