'use strict';

<<<<<<< HEAD
var type = require('../constants').action.type;
=======
var http = require('request-promise');

var store = require('../store');

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
  return {
    type: ADD_WAYPOINT,
    payload: payload
  }
}

function clearForm(){
  return {
    type: CLEAR_FORM
  }
}

// TODO LATER
// function publishRace(payload){
//   // make ajax call to server with Post
//   //
//   var id = store.getState().user.id;
//   var options = {
//       method: 'POST',
//       uri: '/users/' + id + '/races',
//       body: payload,
//       json: true // Automatically stringifies the body to JSON
//   };


//   http(options)
//       .then(function (parsedBody) {
//           dispatch(clearForm());
//       })
//       .catch(function (err) {
//           // POST failed...
//       });
//   // then,
//     // on success, extend current state
//     // on error, leave current state
// }

module.exports = {
  centerMap: centerMap,
  addWayPoint: addWayPoint
};
>>>>>>> add publish-actions
