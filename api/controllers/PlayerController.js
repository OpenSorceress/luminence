/**
 * PlayersController
 *
 * @description :: Server-side logic for managing players
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	hi: function (req, res) {
		if (!req.session) {

		}
		return res.status(200).send({message: "Hi there!"});
	},

	bye: function (req, res) {
		if (req.session) {
			delete req.session();
		}
		return res.status(200).send({ statusText: "Adios!"});
	}

};

