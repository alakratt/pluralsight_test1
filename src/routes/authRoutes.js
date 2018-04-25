const express = require('express');
const authRouter = express.Router();
const mongodb = require('mongodb').MongoClient;

const router = function () {
	authRouter.route('/signUp')
	.post(function (req, res) {		
		console.log(req.body);
		//req.login
	});
	return authRouter;

};

module.exports = router;