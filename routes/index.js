'use strict';
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Url = require('../db/mongo.js').UrlModel;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Url Shortener Service' });
});

router.get('/:shortUrl', function(req, res){
  let shortUrl = req.params.shortUrl;
  Url.findOne({short_url: shortUrl}, function(err, doc){
    if (err) throw err;
    res.redirect(doc.long_url);
  });
});



module.exports = router;
