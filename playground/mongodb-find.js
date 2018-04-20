//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('connected to MongoDB server');

    var db = client.db('Todos');
    /*
    db.collection('Todos').find({
        _id: new ObjectID('5ad703fbd6f5e3093e3a8274')
        }).toArray().then( (docs)=>{
       console.log('Todos');
       console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log('Unable to fetch todos', err)
    });
*/
/*
    db.collection('Todos').find().count().then( (count)=>{
       console.log(`Count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err)
    });
*/
    db.collection('Users').find({name:"Victor"}).toArray().then( (docs)=>{
        console.log(docs);
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
     }, (err) => {
         console.log('Unable to fetch todos', err)
     });    



    client.close();
});