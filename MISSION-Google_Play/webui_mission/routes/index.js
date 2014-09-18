var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	//res.send("lsdf");
	res.render('test.html');
});


module.exports = router;
