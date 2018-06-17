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
//  db.collection('Todos').find().toArray().then((docs) =>{

//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined,2))
//  },(err) =>{

//     console.log('Unable to fecth todos',err)
//  });
  //query filter with find
//   db.collection('Todos').find({completed:true}).toArray().then((docs) =>{
    
//         console.log('Todos');
//         console.log(JSON.stringify(docs, undefined,2))
//      },(err) =>{
    
//         console.log('Unable to fecth todos',err)
//      });
     //will show only walk the dog


     //find by id
    //  db.collection('Todos').find({
    //      _id: new ObjectId("5b23e0a2d69c8205b4728ab0") //recods
    //  }).toArray()
    //  .then((docs) =>{
        
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined,2))
    //      },(err) =>{
        
    //         console.log('Unable to fecth todos',err)
    //      });

    //** Another way to query with cound method that is set to promise
   
    // db.collection('Todos').find().count().then((count) =>{
        
    //         console.log(`Todos count: ${count}`);//2
    //         console.log(JSON.stringify(count, undefined,2))//2
    //      },(err) =>{
        
    //         console.log('Unable to fecth todos',err)
    //      });

         //*serarch by Name from the database from Users collection

db.collection('Users').find({
    name: "Hridoy" //its a string
}).toArray().then((docs) =>{
        
            console.log(JSON.stringify(docs, undefined,2))//2
         },(err) =>{
        
            console.log('Unable to fecth todos',err)
         });
         /* OUTPUT by All name "Hridoy"
         [                                         
  {                                       
    "_id": "5b23e0a2d69c8205b4728ab1",    
    "name": "Hridoy",                     
    "age": 22,                            
    "place": "Chittagong"                 
  },                                      
  {                                       
    "_id": "5b240c439ffe5624b08ce1d1",    
    "name": "Hridoy",                     
    "age": 22,                            
    "place": "Chittagong"                 
  }                                       
]                                         
 */

 client.close();
});