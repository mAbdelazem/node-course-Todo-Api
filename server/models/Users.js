var mongoose = require('mongoose');
var Users =  mongoose.model('Users',{
  User: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});
var newUser = new Users({
  User: '  Zeemo',
  email:'moh_zeemo@hotmail.com   '
});
module.exports = {Users};
