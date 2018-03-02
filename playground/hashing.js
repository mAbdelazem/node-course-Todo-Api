const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id:10
};

var token= jwt.sign(data,'123abc');

console.log(token);
var decoade =  jwt.verify(token,'123abc');
console.log(decoade);


// var message = 'im user number 1';
// var hash = SHA256(message).toString();
// console.log(`M:${message}`);
// console.log(`H: ${hash}`);
