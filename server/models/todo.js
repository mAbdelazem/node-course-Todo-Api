var mongoose = require('mongoose');
var Todo =  mongoose.model('Todo',{
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: true
  },
  completedAt: {
    type : Number,
    default:null
  }
});
var newTodo = new Todo({
  text:' edit this video   '
});
module.exports = {Todo};
