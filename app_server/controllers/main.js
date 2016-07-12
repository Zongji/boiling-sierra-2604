
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


module.exports.webhook = function(req, res, next){
	console.info("content-type:"+req.get("content-type"));
	console.info("content-md5:"+req.get("content-md5"));
	console.info("authorization:"+req.get("authorization"));
	console.info("=============");
	res.json(req.headers);
}