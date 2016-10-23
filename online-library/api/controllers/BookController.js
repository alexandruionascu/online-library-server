/**
 * BookController
 *
 * @description :: Server-side logic for managing Books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Guid = require('guid');
var books = require('google-books-catalogue-search');
var randomWords = require('random-words');

module.exports = {
	get: function(req, res) {
		Book.find().exec(function(error, models) {
			if(error)
				console.log(error);
			res.send(models);
		});
	},

	googleBooks: function(req, res) {
		for(var i = 0; i < 100; i++) {
			var query = randomWords();
			books.search(query, function(error, results) {
		    if (!error ) {
		        if(results != null) {
							console.log(results);
							for(var j = 0; j < results.length; j++) {
									Guid.create();
									if(results[j].authors !== undefined && results[j].categories !== undefined ) {
										var data = {
											id: Guid.raw(),
											title: results[j].title,
											author: results[j].authors[0],
											category: results[j].categories[0],
											description: results[j].description,
											rating: results[j].averageRating,
											coverPicture: results[j].imageLinks.smallThumbnail
										};
										Book.create(data).exec(function(err, model) {
											//	console.log(model);
										});
									}


						}



						}


		    } else {
		        console.log(error);
		    }
			});
		}

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
