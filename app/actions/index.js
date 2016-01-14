'use strict';

module.exports = {
  //LOGIN, LOGOUT
  authAction: require('./auth-action'),

  //NAV_CREATE_RACE, NAV_CREATED_RACES,
  //NAV_SUMMARY, NAV_RACE
  navigateToAction: require('./navigate-to-action'),

  //CENTER_MAP, ADD_WAYPOINT, PUBLISH_RACE
  publishAction: require('./publish-action'),

  // CHECK_IN, ENABLE_CHECK_IN
  checkInAction: require('./check-in-action'),

  // TIMER_START, TIMER_FINISH
  timerAction: require('./timer-action'),

  // START_RACE, FINISH_RACE, CANCEL_RACE
  raceAction: require('./race-action'),

  // LOCATION_CHANGE
  locationChange: require('./location-change'),
};
'use strict';\nvar type = require('../constants').action.type;
