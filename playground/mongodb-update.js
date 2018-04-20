//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('connected to MongoDB server');

    var db = client.db('Todos');

    //findOneAndUpdate
/*
    db.collection('Todos').findOneAndUpdate( {
        _id: new ObjectID ("5ad991519048f10810c83253")
        }, {
        $set: {
            completed: true
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });
*/

    db.collection('Users').findOneAndUpdate( {
    _id: new ObjectID ("5ad8def39048f12b3c37c5d5")
    }, {
    $set: {
        name: "Dave",
        },
        $inc: {
            age: 60,
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    client.close();
});