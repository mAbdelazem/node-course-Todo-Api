const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/Users');

var id = '5a688133dc4348f012204c9e';
Users.findById(id).then((users)=>{
  if(!users){
    return console.log('id not found');
  }
  console.log('Users',users);
}).catch((e)=>console.log(e))
// var id = '5a6b49412f0f75c1172eb6ad11';
//
// if(!ObjectID.isValid(id)){
//   console.log('id is not vaild')
// }
// // Todo.find({
// //   _id : id
// // }).then((todos)=>{
// //   console.log('todos',todos);
// //
// // });
// // Todo.findOne({
// //   _id : id
// // }).then((todo)=>{
// //   console.log('todo',todo);
// //
// // });
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('id not found');
//   }
//   console.log('todo By Id',todo);
//
// }).catch((e)=>console.log(e));
