var mongoose = require('mongoose');

var raceSchema = new mongoose.Schema({
	race_id: Number,
	creator: Number,
	waymarks: Array,
	start_location: {
		type: [Number],
		index: '2d'
	},
	racers: Array,
	results: Array,
	date: String,
	time: String
});

raceSchema.index({ start_location : '2dsphere' });
var Race = mongoose.model('Race', raceSchema);

module.exports = Race;