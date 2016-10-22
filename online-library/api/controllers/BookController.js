/**
 * BookController
 *
 * @description :: Server-side logic for managing Books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Guid = require('guid');

module.exports = {
	get: function(req, res) {
		Book.find().exec(function(error, models) {
			if(error)
				console.log(error);
			res.send(models);
		});
	},

	getBook: function(req, res) {
		var id = req.param('id');
		Book.findOne().where({id: id}).exec(function(error, model) {
			if(error)
				console.log(error);
			res.send(model);
		});
	},

	create: function(req, res) {
		Guid.create();

		var data = {
			id: Guid.raw(),
			title: req.body.title,
			author: req.body.author,
			description: req.body.description,
			quotes: req.body.quotes,
			coverPicture: req.body.coverPicture,
			categories: req.body.categories
		};

		Book.create(data).exec(function(err, model) {
			if(err)
				console.log(err);
			res.send(model);
		});
	}
};
