const {MongoClient,ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,(err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }

  db.collection('Todos').insertOne({
    text:'Something to do',
    completed:false
  },(err,res)=>{
    if(err){
      return console.log('Unable to insert');
    }
    console.log(JSON.stringify(res.ops,undefined,2));
  });

db.collection('Todos').deleteMany({"text":"Something to do"}).then((result)=>{
  console.log(result);
},(err)=>{
  console.log("Error",err);
});

db.collection('Todos').deleteOne({"text":"Eat lunch"}).then((res)=>{
  console.log(res);
});

db.collection('Todos').findOneAndDelete({"completed":false}).then((res)=>{
  console.log('Deleted todo',res);
});

});
