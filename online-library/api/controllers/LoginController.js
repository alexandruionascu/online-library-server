/**
 * LoginController
 *
 * @description :: Server-side logic for managing Logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get: function(req, res) {

		User.count({name:'Flynn'}).exec(function(error, found) {
			if(err)
				console.log(err);
	  	res.send(found);

		});
	}
};
