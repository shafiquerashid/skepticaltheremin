'use strict';

var type = require('../constants').action.type;
var LOCATION_CHANGE = require('../constants').action.LOCATION_CHANGE;

  // LOCATION_CHANGE
/* payload:
{
	currentLocation: ['lat','lng']	
}
*/
var locationChange = function (payload) {
	return {
		type: LOCATION_CHANGE,
		payload: payload
	}
}