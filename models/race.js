var mongoose = require('mongoose');

var raceSchema = new mongoose.Schema({
	race_id: { type: Integer, index: {unique: true}},
	creator: Integer,
	waymarks: Array,
	start_location: Array,
	racers: Array,
	results: Array,
	date: String,
	time: String
});

var Race = mongoose.model('Race', raceSchema);

module.exports = Race;