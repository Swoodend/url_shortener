'use strict';
let express = require('express');
let router = express.Router();


router.get('/:longUrl*', function(req, res, next) {
  let longUrl = req.params.longUrl + req.params[0];
  res.send(longUrl);
});

module.exports = router;