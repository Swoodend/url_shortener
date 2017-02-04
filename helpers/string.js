'use strict';

function getRandomString(){
  let chars = 'abcdefghijklmnopqrstuvwxzy0123456789'.split('');
  let randStr = '';

  for (let i = 0; i < 5; i++){
    let randIndex = Math.floor(Math.random() * 36);
    randStr += chars[randIndex];
  }

  return randStr;
}


module.exports = getRandomString;