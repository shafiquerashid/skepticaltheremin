'use strict';

var type = require('../constants').action.type;
var CHECK_IN = require('../constants').action.CHECK_IN;
// CHECK_IN, ENABLE_CHECK_IN

var checkIn = function () {
	return {
		type: CHECK_IN
	}
}