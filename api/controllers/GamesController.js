/**
 * GamesController
 *
 * @description :: Server-side logic for managing games
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var Game = sails.models.game;

module.exports = {

	play: function (req, res) {

		console.log(req.param('data'));
		console.log("yay");

		if (req.param('data')) {

			Game.histories.create(req.param('data'))
					.exec(function (err, res) {
						if (err) throw err;
						console.log(res);
					});
			res.status(200).send({"game": games});
		}
		res.status(302).send({"message": "The clock is running"});

	},


	edit: function (req, res) {

		return res.redirect("http://sadtrombone.com/?autoplay=true");

	}

};

