
var data = {
			title : "A Express app written in Node.js on heroku"
		};
module.exports.index = function(req, res, next) {
	// console.info(data);
	data.menu = "main";
	res.render('index', data);
};


module.exports.git = function(req, res, next) {
	data.menu = "git";
	res.render('git', data);
};

module.exports.trends= function(req, res, next) {
	data.menu = "trends";
	res.render('trends', data);
};

module.exports.bookmarks = function(req, res, next) {
	data.menu = "bookmarks";
	res.render('bookmarks', data);
}