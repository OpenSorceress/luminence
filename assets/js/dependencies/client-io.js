var GameModel = Backbone.Model.extend({
	urlRoot: '/games'
});

var GameCollection = Backbone.Collection.extend({
	url: '/games',
	model: GameModel
});

var games = new GameCollection();
games.fetch();

$('#game').on('click', function (e) {


	var rgb = [];
	var alpha = (parseInt(e.pageX - e.pageY, 10)); // user-generated randomness
	var data = '';

	while (rgb.length < 3) {
		rgb.push(getRandomInt(0, 255));
	}

	$(rgb).each(function (i) {
		data += rgb[i].toString();
		if (i < 2) {
			data += ',';
		}
	});
	data = 'rgb(' + data + ')';
	$(e.currentTarget).css({'background-color': data}).fadeTo(e.pageX, alpha / e.pageY * .30 / 2, 'easeInCubic', games.create({game: data}, {wait: true}));

});
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
