const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = 'abc123!';
// bcrypt.genSalt(10,(err,salt)=>{
//   bcrypt.hash(password,salt,(err,hash)=>{
//     console.log(hash);
//   })
// });

var hashedPassword = '$2a$10$Db21TV2SnNq6dvrbKpYIgO9Y6ab5bUheXN0fSe1QpH3wK/W56wVEe';

bcrypt.compare(password,hashedPassword,(err,res)=>{
  console.log(res);
});
// var data = {
//   id:10
// };c
//
// var token= jwt.sign(data,'123abc');
//
// console.log(token);
// var decoade =  jwt.verify(token,'123abc');
// console.log(decoade);
//

// var message = 'im user number 1';
// var hash = SHA256(message).toString();
// console.log(`M:${message}`);
// console.log(`H: ${hash}`);
