var express = require('express');
var router = express.Router();

var data = {
	title : "A Express app written in Node.js on heroku"
};

/* GET home page. */
router.get('/', function(req, res, next) {
	data.menu = "main";
	res.render('index', data);
});


router.get('/git', function(req, res, next) {
	data.menu = "git";
	res.render('git', data);
});

router.get('/trends', function(req, res, next) {
	data.menu = "trends";
	res.render('trends', data);
});

router.get('/bookmarks', function(req, res, next) {
	data.menu = "trends";
	res.render('bookmarks', data);
});


module.exports = router;
