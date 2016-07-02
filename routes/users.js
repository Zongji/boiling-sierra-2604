var express = require('express');
var request = require('request');
var router = express.Router();

var data = {title:"A Express app written in Node.js on heroku"};

/* GET users listing. */
router.get('/', function(req, res, next) {
	
	res.render('user',data);
});

module.exports = router;
