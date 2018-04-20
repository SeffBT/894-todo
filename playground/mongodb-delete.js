//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('connected to MongoDB server');

    var db = client.db('Todos');

    //delteMany
    //db.collection('Todos').deleteMany({text: 'Feed the dog'}).then( (result) => { 
        //console.log (result);
    //});

    // deleteOne
    //db.collection('Todos').deleteOne({text: 'Feed the dog'}).then( (result) => { 
      //  console.log (result);
    //});


    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({text: 'Feed the dog'}).then( (result) => { 
        console.log (result);
    });

    client.close();
});