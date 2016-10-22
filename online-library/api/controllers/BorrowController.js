/**
 * BorrowController
 *
 * @description :: Server-side logic for managing borrows
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Guid = require('guid');
var timestamp = require('timestamp');
var bigInt = require('big-int');

module.exports = {
	get: function(req, res) {
		var id = req.param('id');
		console.log(id);
		Borrow.find().where({userId: id}).exec(function(error, models) {
			if(error)
				console.log(error);
			res.send(models);
		});
	},

	getAll: function(req, res) {
		Borrow.find().exec(function(error, models) {
			if(error)
				console.log(error);
			res.send(models);
		});
	},

	create: function(req, res) {
		var data = {
			id: Guid.raw(),
			userId: req.body.userId,
			bookId: req.body.bookId,
			start: Math.round(bigInt(timestamp()).val()).toString(),
			end: Math.round(bigInt(bigInt(timestamp()) + bigInt(req.body.days * 24 * 3600000)).val()).toString()
		};

		Borrow.create(data).exec(function(err, model) {
			if(err)
				console.log(err);
			res.send(model);
		});
	}
};
