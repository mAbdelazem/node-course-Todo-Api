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
db.collection('Info').findOneAndUpdate({
  _id :new ObjectID('5a5f32f1dbcbb3181f050d0e')
},{
  $inc:{age:1}
},{
  returnOriginal : false
})
.then((result)=>{
  console.log(result);
})
    // db.close()
});
