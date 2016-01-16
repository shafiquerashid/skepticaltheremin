'use strict';

module.exports = {
  //LOGIN, LOGOUT
  authAction: require('./auth-action'), //DONE

  //NAV_CREATE_RACE, NAV_CREATED_RACES,
  //NAV_SUMMARY, NAV_RACE
  navigateToAction: require('./navigate-to-action'), //DONE


  //CREATED_RACES_SUCCESS, //SELECT_RACE
  createdRacesAction: require('./created-races-action'), //DONE


  //CENTER_MAP, ADD_WAYPOINT, PUBLISH_RACE, CLEAR_FORM
  publishAction: require('./publish-action'), //DONE

  // CHECK_IN, ENABLE_CHECK_IN
  checkInAction: require('./check-in-action'), //DONE

  // *TIMER_START*, TIMER_FINISH
  timerAction: require('./timer-action'), //DONE

  // START_RACE, FINISH_RACE, CANCEL_RACE
  raceAction: require('./race-action'), //TO BE COMPLETE WITH SOCKETS

  // LOCATION_CHANGE
  locationChangeAction: require('./location-change-action')  //DONE
};
