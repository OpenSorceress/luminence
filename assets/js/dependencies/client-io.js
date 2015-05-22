var GameModel = Backbone.Model.extend({
	urlRoot: '/games'
});

var GameCollection = Backbone.Collection.extend({
	url: '/games/play',
	model: GameModel
});

var game = new GameModel();
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

	data = {
		player: '<%=req.session.user%>' || 0,
		game: games.fetch({ playerId: '<%=req.session.user%>'}) || 0,
		histories: {
			rgb: 'rgb(' + data + ')',
			alpha: alpha
		}
	};

	$(e.currentTarget).css({'background-color': data.rgb}).fadeTo(
			e.pageX, alpha / e.pageY * .30 / 2,
			'easeInCubic',
			games.create('/games/play', {data:data}, {wait:true}) //({ data: data }, {wait:true})
	);

});
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}
