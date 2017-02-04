var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Url Shortener Service' });
});

router.get('/:shortUrl', function(req, res){
  res.send(req.params.shortUrl);
});



module.exports = router;
