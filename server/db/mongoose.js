var mongoose = require('mongoose');
var {Db} = require('./../../playground/connectionDB.js');
mongoose.Promise =global.Promise;
mongoose.connect(Db);
module.exports = {mongoose};
