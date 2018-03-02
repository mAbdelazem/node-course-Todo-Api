// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');
// var obj = new ObjectID();
// console.log(obj);
// var user = {name: 'Mohamed',age:25};
// var {name} = user;
// console.log(name);
//
var {Db} = require('./connectionDB.js');
MongoClient.connect(Db,(err, db)=>{
  if(err){
    return console.log('unable to connect to MongoDB server');

  }else{
    console.log('connected to MongoDB server');
  }
    db.collection('Info').insertOne({
      name: 'Mohamed',
      age: 25,
      location: 'Egypt',
      activities:[
        {activity:'gymnastic'},
        {activity:'reading'},
        {activity:'writing'}
      ]
    },(err, res)=>{
        if(err){
              return console.log('Unable to insert Info');
        }else {
          console.log(res.ops[0]._id.getTimestamp());
        }
    });
    db.close();

});
