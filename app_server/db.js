//var uri = 'mongodb://node1:node1@ds045064.mlab.com:45064/advance-node';
var uri = 'mongodb://test:test@ds011725.mlab.com:11725/polar-shore';

var db = require('mongoskin').db(uri);
db.collection('songs').find().toArray(function(err, result) {
    if (err) throw err;
	console.log('dekdkeodkoe');
    console.log(result);
    db.close();
});

