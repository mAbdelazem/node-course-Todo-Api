// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');
// var obj = new ObjectID();
// console.log(obj);
// var user = {name: 'Mohamed',age:25};
// var {name} = user;
// console.log(name);
//
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
    return console.log('unable to connect to MongoDB server');

  }else{
    console.log('connected to MongoDB server');
  }
// db.collection('Todos').find({_id: new ObjectID('5a5f38cfbcd563d1d857d8b5')}).toArray().then((docs)=>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   if(err){
//     return console.log('Unable to Fetch Todos');
//   }
// });
db.collection('Info').find({name:'Mohamed'}).toArray().then((user)=>{
  console.log(`User`);
  console.log(JSON.stringify(user,undefined,2));
},(err)=>{
  if(err){
    return console.log('Unable to Fetch Todos');
  }
});
    // db.close()
});
