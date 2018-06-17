// const MongoClient = require('mongodb').MongoClient;
//same thing as abvobe with es6 des...
const{MongoClient,ObjectId} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{

 if(err){

   return  console.log('Unable to connect to MongoDB server');
 }
 
 console.log('Connected to MongoDB server');


 //fetching data from new collectionm into the dataBase
 const db = client.db('TodoApp')

 //deleteMany by text name
//  db.collection('Todos').deleteMany({text:"Eat Launch"}).then((result) =>{

//     console.log(result);
//  });

 //deleteOne

//  db.collection('Todos').deleteOne({text:"Eat"}).then((result)=>{

//     console.log(result);
//  })
 //findOneAndDelete that returns with value

//  db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    
//         console.log(result);

//  });

// db.collection('Users').deleteMany({name:"Hridoy"}).then((result)=>{
    
// console.log(result);//will delete all hridoy
// });
db.collection('Users').findOneAndDelete({
    _id:  new ObjectId("5b266515c5ace9d28a5d8573")})
    .then((result)=>{
    
console.log(JSON.stringify(result,undefined,2));//will delete all hridoy
});
 client.close(); 

});