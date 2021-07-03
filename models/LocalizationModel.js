var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LocalizationSchema = new Schema({
	postalCode: {type: String, required: true},
	name: {type: String, required: true},
}, {timestamps: true});

module.exports = mongoose.model("Localization", LocalizationSchema);
