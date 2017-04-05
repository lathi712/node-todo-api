const {MongoClient,ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,(err,db) => {
if(err){
  return console.log('Unable to connect to Mongodb server');
}
//   db.collection('Users').findOneAndUpdate({
//     _id: ObjectID("58e4d799d751b3034f1d5b4b")
// },{
//   $set:{
//     name:'Panji'
//   }
// },{
//   returnOriginal:false
// }).then((res)=>{
//   console.log(res);
// },(err)=>{
//   console.log('Error',err);
// });


db.collection('Users').findOneAndUpdate({name:'Lathesh'},{
  $set:{
    name:'Lathesh Karkera'
  },
  $inc:{
    age:1
  }
},{
  returnOriginal:false
}).then((res)=>{
  console.log(res);
});
});
