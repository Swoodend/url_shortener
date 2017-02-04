'use strict';
const express = require('express');
const router = express.Router();
const getRandomString = require('../helpers/string.js');
const mongo = require('../db/mongo.js');
const Url = require('../db/mongo.js').UrlModel;
const validUrl = require('valid-url');
console.log(validUrl);


router.get('/:longUrl*', function(req, res, next) {
  let longUrl = req.params.longUrl + req.params[0];
  let shortUrl = getRandomString();

  if (validUrl.isHttpUri(longUrl) || validUrl.isHttpsUri(longUrl)){
    mongo.addUrlPairing(longUrl, shortUrl, function(){
      res.send({long_url:longUrl, short_url: shortUrl});
    });
  } else {
    res.send({'Error' : "Invalid URL"});
  }


});

module.exports = router;