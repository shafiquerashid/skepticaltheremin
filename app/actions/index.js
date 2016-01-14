'use strict';

module.exports = {
  //LOGIN, LOGOUT
  authAction: require('./auth-action'),

  
  //NAV_CREATE_RACE, NAV_CREATED_RACES,
  //NAV_SUMMARY, NAV_RACE
  navigateToAction: require('./navigate-to-action'), //DONE

  //CENTER_MAP, ADD_WAYPOINT, PUBLISH_RACE, CLEAR_FORM
  publishAction: require('./publish-action'), //DONE

  // CHECK_IN, ENABLE_CHECK_IN
  checkInAction: require('./check-in-action'), //DONE

  // TIMER_START, TIMER_FINISH
  timerAction: require('./timer-action'), 

  // START_RACE, FINISH_RACE, CANCEL_RACE
  raceAction: require('./race-action'), 

  // LOCATION_CHANGE
  locationChangeAction: require('./location-change-action') 
};
