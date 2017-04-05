const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,(err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Mongodb server connected successfully');

  db.collection('Todos').insertOne({
    text:'Something to do',
    completed:false
  },(err,res)=>{
    if(err){
      return console.log('Unable to insert');
    }
    console.log(JSON.stringify(res.ops,undefined,2));
  });

  db.collection('Users').insertOne({
    name:'Lathesh',
    age:24,
    location:'Mangalore'
  },(err,res)=>{
    if(err){
      return console.log('Unable to insert');
    }
    console.log(JSON.stringify(res.ops,undefined,2));
    console.log(res.ops[0]._id.getTimestamp());
  });
  db.close();
});
