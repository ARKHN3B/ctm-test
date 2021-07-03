const axios = require("axios");
const Good  = require("../models/GoodModel");

module.exports.updateGoods = async function () {
	const day    = new Date().getDay() + 1;
	const {data} = await axios.get(`https://test-leadev.osc-fr1.scalingo.io/citimaImmo?day=${day}`, {headers: {"api-key": "xFrMPL9rviwifWrVvklK2Iui6jKyX2f9"}});
	console.log(data);

	if (!data || !data.length) throw new Error("No good received");

	const parsedData = data.map(good => new Good({
		businessId        : good.businessId,
		publisherReference: good.publisherReference,
		summary           : good.summary,
	}));

	const promises = [];

	for (const good of parsedData) {
		const promise = Good.findOneAndUpdate({publisherReference: good.publisherReference}, good, {
			new   : true,
			upsert: true
		}, (err, doc) => {
			if (err) {
				console.log("Something wrong when updating data!");
			}

			console.log(doc);
		});
		promises.push(promise);
	}

	const allSettled = await Promise.allSettled(promises); // TODO manage rejected

	// allSettled.forEach(({status}) => {
	// 	// if (status === "rejected")
	// })

	return allSettled;
};
