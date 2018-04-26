const express = require('express');
const authRouter = express.Router();
const mongodb = require('mongodb').MongoClient;

const router = function () {
	authRouter.route('/signUp')
	.post(function (req, res) {		
		console.log(req.body);
		req.login(req.body, function() {
			res.redirect('/auth/profile');
		})
	});
	authRouter.route('/profile').get(function(req, res) {
		res.json(req.user);
	});
	return authRouter;

};

module.exports = router;