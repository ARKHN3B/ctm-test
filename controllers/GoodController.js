const Good                     = require("../models/GoodModel");
const apiResponse              = require("../helpers/apiResponse");
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
			const updatedGood = await updateGoods().catch(err => {
				//throw error in json response with status 500.
				return apiResponse.ErrorResponse(res, err.message);
			});
			console.debug({updatedGood});
			return apiResponse.successResponseWithData(res, "Operation success");
		}
		catch (err) {
			//throw error in json response with status 500.
			return apiResponse.ErrorResponse(res, err);
		}
	};
