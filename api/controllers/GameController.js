/**
 * GameController
 *
 * @description :: Server-side logic for managing games
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	play: function (req, res) {


		return res.send("The clock is running");

	},


	edit: function (req, res) {

		return res.redirect("http://www.sayonara.com");

	}

};

