'use strict';


var type = require('../constants').action.type;
var http = require('rest');
var _ = require('lodash');
var store = require('../store/configureStore.js');
var CENTER_MAP = require('../constants').action.CENTER_MAP;
var ADD_WAYPOINT = require('../constants').action.ADD_WAYPOINT;
var PUBLISH_RACE = require('../constants').action.PUBLISH_RACE;

// payload looks like: {latitude, longitude}
function centerMap(payload){
  return {
    type: CENTER_MAP,
    payload: payload
  };
};

function addWayPoint(payload){
  var currentState = this.state.waymarks;
  currentState.push(payload.address);
  payload.address = currentState

   return {
    type: ADD_WAYPOINT,
    payload: payload
  };
}

function clearForm(){
  return {
    type: CLEAR_FORM
  }
}

// TODO LATER
function publishRace(payload){
  // make ajax call to server with Post
  //
  var id = store.getState().user.id;
  var options = {
      method: 'POST',
      uri: '/users/' + id + '/races',
      //we will need to add logic to make sure wayPoints contains data before sending
      body: _.extend(payload, {waymarks: this.state.waymarks}),
      json: true // Automatically stringifies the body to JSON
  };


  http(options)
      .then(function (parsedBody) {
          dispatch(clearForm());
      })
      .catch(function (err) {
          // POST failed...
      });
  // then,
    // on success, extend current state
    // on error, leave current state
}

module.exports = {
  centerMap: centerMap,
  addWayPoint: addWayPoint,
  publishRace, publishRace
};
// add publish actions
