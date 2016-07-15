
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
	console.info("content-type:["+req.get("content-type")+"]\n"
		+"content-md5:["+req.get("content-md5")+"]\n"
		+"authorization:"+req.get("authorization")+"]\n"
		+"Authorization:"+req.get("Authorization")+"]\n"
		+ "============================================");
	var result = {};
	result.headers = req.headers;
	result.body = req.body;
	res.json(result);
}