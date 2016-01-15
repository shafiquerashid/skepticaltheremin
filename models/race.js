var mongoose = require('mongoose');

var raceSchema = new mongoose.Schema({
	race_id: Number, //unique identifier
	creator: String,
	waymarks: Array,
	start_location: {
		type:{	
			type: String,
			default: "Point"
		},
		coordinates: [Number]
	},
	racers: Array,
	results: Array,
	date: String,
	time: String,
	name: String
});

raceSchema.index({ start_location : '2dsphere' });
var Race = mongoose.model('Race', raceSchema);

module.exports = Race;