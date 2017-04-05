const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,(err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Mongodb server connected successfully');

  db.collection('Users').find({name:'Lathesh'}).count().then((data)=>{
    console.log(`Users count is ${data}`);
  },(err)=>{
    console.log('Could not fetch data',err);
  });
  db.close();
});
