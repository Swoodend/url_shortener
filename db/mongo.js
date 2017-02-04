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

  pairing.save(function(err){
    if (err) throw err;
    console.log('pairing saved to db url_shortener, collection urls');
    cb();
  });
}

module.exports = {
  UrlModel : Url,
  addUrlPairing : addUrlPairing
};