var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {ObjectID} = require('mongodb');
var {mongoose} =require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {Users} = require('./models/Users.js');

var app= express();

app.use(bodyParser.json());

app.post('/Users',(req, res)=>{
  var User = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  User.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});
app.get('/Users',(req, res)=>{
  Users.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  });
});
app.get('/Users/:user',(req, res)=>{
  var name = req.params.user;
console.log(name);
  Users.findOne({User : name}).then((users)=>{
    if(!users){
      res.status(403).send();
    }
    res.send(users);
  }).catch((e)=>{
    res.status(400).send();
  });
});

app.listen(3000,()=>{
  console.log('starting on port 3000');
});
module.exports = {app};
