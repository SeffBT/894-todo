var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then( (doc) => {
        res.send(doc);
    }, (e) =>{
        res.status(400).send(e);
    });
});

app.get('/todos',(req, res) => {
    Todo.find().then(   (todos)=> {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {



    //res.send(req.params);
    var id = req.params.id;
    
    // Valid ID using isValid
    if (!ObjectID.isValid(id)){
        console.log("invalid");
        return res.status(404).send();
    }else{
        console.log("valid");
        User.findById(id).then( (todo) => {
            if (!todo){
                return res.status(404).send();    
            }else{
                console.log("found");
                //return res.status(200).send(JSON.stringify(todo, undefined,2));
                res.send({todo});
            }
            
        }).catch((e) =>{
            console.log("Not found");
            return res.status(400).send();
        });
        
        
        
    
    }

    

    // find by ID
    //success 
        // if todo = snd it back
        // if no todo - 
    // error 
    // 400 - and send empty body back
})

app.listen(3000, () => {
    console.log(`Started on port ${port}`);
}
 
);

module.exports = {app};



/*
var newTodo = new Todo({
    text: 'Buy milk'
});

newTodo.save().then( (doc) => {
    console.log('Save todo', doc);
}, (e) => {
    console.log('Unable to save todo')
})



var newUser = new User({
    email: 'bobby@klp.com'
});

newUser.save().then( (doc) => {
    console.log("unable to add user", doc);
}, (err) => {
 console.log("unable to add user");
});

*/
