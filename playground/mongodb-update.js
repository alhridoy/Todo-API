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

 

//  db.collection('Todos').findOneAndUpdate({

//     _id: new ObjectId('5b2660cdc5ace9d28a5d83a0')
//  }, {
//      $set:{
//          completed:true
//      }
//  },{
//      returnOriginal:false
//  }).then((result)=>{
 
//    console.log(result);
//  })
db.collection('Users').findOneAndUpdate({
    
        _id: new ObjectId('5b240e0abffe3a225c918afc')
     }, {
         $set:{
             name:'Elahi'
         
     },
   $inc:{

    age:1
   }
},{
         returnOriginal:false
     }).then((result)=>{
     
       console.log(result);
     })
//  client.close(); 

});