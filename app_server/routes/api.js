var express = require('express');
var router = express.Router();
var json = require('../obj');

var data = {title:"A Express app written in Node.js on heroku"};

var uri = 'mongodb://test:test@ds011725.mlab.com:11725/polar-shore';
var db = require('mongoskin').db(uri);

/* GET users listing. */
router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
	data.menu = "user";
	res.json(data);

});

router.get('/users',function(req,res,next){
	res.json(json);
});

//req.params 路径参数, req.body表单参数, or req.query url附带的参数
router.post('/users',function(req,res,next){
	console.log('post has come1');
	if (req.body.name && req.body.pass) {
		console.log(req.body.name + ":" + req.body.pass);
	}
	res.sendStatus(200);
});

router.put('/:id',function(req,res){

});

router.delete('/:id',function(req,res){
	
});


router.get('/songs',function(req,res){
	db.collection('songs').find().toArray(function(err, result) {
	    if (err) throw err;
	    // console.log(result);
	    res.json(result);
	});
	//db.close();
});


module.exports = router;
