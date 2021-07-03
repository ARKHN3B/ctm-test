const Good                     = require("../models/GoodModel");
const {body, validationResult} = require("express-validator");
const {sanitizeBody}           = require("express-validator");
const apiResponse              = require("../helpers/apiResponse");
const auth                     = require("../middlewares/jwt");
const http                     = require("http");
const axios                    = require("axios");
const {updateGoods}            = require("../helpers/goodActions");


exports.goodList = async function (req, res) {
	try {
		const all = await Good.find({});
		return apiResponse.successResponseWithData(res, "Operation success", all);
	}
	catch (err) {
		//throw error in json response with status 500.
		return apiResponse.ErrorResponse(res, err);
	}
}

/**
 * Good Store.
 *
 * @returns {Object}
 */
exports.goodStore =
	async function (req, res) {
		try {
			const updatedGood = await updateGoods();
			console.debug({updatedGood});
			return apiResponse.successResponseWithData(res, "Operation success");
		}
		catch (err) {
			//throw error in json response with status 500.
			return apiResponse.ErrorResponse(res, err);
		}
	};
