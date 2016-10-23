/**
 * RecommendationController
 *
 * @description :: Server-side logic for managing Recommendations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var redis = require("redis");
var client = redis.createClient({
	host: '192.168.43.161',
	port: 6379
});

module.exports = {
	get: function(req, res) {
		var id = req.param('id');
		client.get('book:' + id.toString(), function(err, reply) {
			if(reply !== null) {
				var response = new Array();
				reply = JSON.parse(reply);
				for(var i = 0; i < reply.length; i++) {
					response.push({
						'bookId': reply[i][0],
						'score': reply[i][1]
					});
				}
	      res.send(response);
			} else {
				res.send(err);
			}

		});
	},

	getUser: function(req, res) {
		var id = req.param('id');
		client.get('user:' + id.toString(), function(err, reply) {
			if(reply !== null) {
				var response = new Array();
				reply = JSON.parse(reply);
				for(var i = 0; i < reply.length; i++) {
					response.push({
						'bookId': reply[i][0],
						'score': reply[i][1]
					});
				}
	      res.send(response);
			} else {
				res.send(err);
			}

		});
	}
};
