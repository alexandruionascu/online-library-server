/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Guid = require('guid');

module.exports = {

	get: function(req, res) {
		User.find().exec(function(error, models) {
			if(error)
				console.log(error);
			res.send(models);
		});
	},

	getUser: function(req, res) {
		var id = req.param('id');
		User.findOne().where({id: id}).exec(function(error, model) {
			if(error)
				console.log(error);
			res.send(model);
		});

	},


	create: function(req, res) {
		Guid.create();

		var data = {
			id: Guid.raw(),
			name: req.body.name,
			password: req.body.password,
			facebookId: req.body.facebookId
		};

		User.create(data).exec(function(err, model) {
			if(err)
				console.log(err);
			res.send(model);
		});
	}
};
