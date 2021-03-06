const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/Users.js');
const {jwt} = require('jsonwebtoken');

const userOneId = new ObjectID();
const useTwoId = new ObjectID();
const users = [{
  _id: userOneId,
  email:'zeemo@hotmail.com',
  pasword:'userOnepass',
  tokens :[{
    access: 'auth',
    token: jwt.sign({_id:userOneId, access:'auth'},'abc123').toString()
  }]
},{
  _id : userTwoId,
  email: "jen@example.com",
  password : 'userTwopass'
}];

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333
}];

const populateUsers = (done)=>{
  User.remove({}).then(()=>{
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    Promise.all([userOne,userTwo]);
  }).then(()=>done());
};


const populateTodos =  (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
}
module.exports = {todos,populateTodos,users,populateUsers};
