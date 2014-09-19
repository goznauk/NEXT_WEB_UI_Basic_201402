var express = require('express');
var router = express.Router();

/* GET test page. */
router.get('/', function(req, res) {
	res.render('test.html');
});

module.exports = router;