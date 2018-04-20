//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('connected to MongoDB server');

    var db = client.db('Todos');
/*
    db.collection('Todos').insertOne({
        text: "Something to do",
        completed: false
    }, (err, result) => {
        if (err){
            return console.log('Unbale to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        
    });
*/
/*
    // Insert new doc inti Users (name, age, location)

    db.collection('USers').insertOne({
        age: "40",
        name: "Victor",
        location: "Paris"
    }, (err, result) => {
        if (err){
            return console.log('Unbale to insert user', err);
        }
        console.log(result.ops[0]._id.getTimestamp());
        
    });
*/
    client.close();
});