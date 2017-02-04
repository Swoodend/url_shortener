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
  mongoose.connect('mongodb://localhost/url_shortener', function(err){
    if (err) throw err;
    let shortUrl = req.params.shortUrl;
    Url.findOne({short_url: shortUrl}, function(err, doc){
      if (err) throw err;
      mongoose.disconnect();
      res.redirect(doc.long_url);
    });
  })
});



module.exports = router;
