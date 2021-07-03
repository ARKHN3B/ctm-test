var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GoodSchema = new Schema({
	businessId        : {type: String, required: true}, // TODO ref
	publisherReference: {type: String, required: true},
	summary           : {
		localization: {
			postalCode: {type: String, required: true},
			name: {type: String, required: true},
		},
		surface     : {type: Number},
		price       : {type: Number},
		rooms       : Number,
		thumbnail   : {
			small: [String]
		},
		property    : {type: String},
		type        : {type: String},
	},
}, {timestamps: true});

module.exports = mongoose.model("Book", GoodSchema);
