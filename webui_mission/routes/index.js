var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	//res.send("lsdf");
	res.render('main.html');
});

module.exports = router;