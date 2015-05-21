/**
 * GameController
 *
 * @description :: Server-side logic for managing games
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	play: function (req, res) {

		if (req.param.data) {

			GameModel.create('Games', data, function(err, games) {
				if (err) {
					console.error(err);
					throw err;
				}
				res.status(200).send({"game": games});

			});

		}

		return res.status(302).send("The clock is running");

	},


	edit: function (req, res) {

		return res.redirect("http://www.sayonara.com");

	}

};

