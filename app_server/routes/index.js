var express = require('express');
var router = express.Router();
var controller = require("../controllers/main");

/* GET index page. */
router.get('/', controller.index);
router.get('/git', controller.git);
router.get('/trends', controller.trends);
router.get('/bookmarks', controller.bookmarks);
router.post('/webhook',controller.webhook);

module.exports = router;
