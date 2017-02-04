'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = mongoose.Schema({
  long_url: {type: String, required: true, unique: true},
  short_url: {type: String, required: true, unique: true}
});

var Url = mongoose.model('Url', urlSchema);



function addUrlPairing(longUrl, shortUrl, cb){
  let pairing = new Url({
    long_url: longUrl,
    short_url: shortUrl
  });

  mongoose.connect('mongodb://localhost/url_shortener', function(err){
  if (err) throw err;
    pairing.save(function(err){
      if (err) throw err;
      console.log('pairing saved to db url_shortener, collection urls');
      mongoose.disconnect();
      cb();
    });
  });
}

module.exports = {
  UrlModel : Url,
  addUrlPairing : addUrlPairing
};