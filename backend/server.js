const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const Schema = mongoose.Schema;
const router = express.Router();
app.use(bodyParser.json());
app.listen(4444, () => {
    console.log('server is up and running on port 4444');
});
// URL de connexion à une base de données mongoDB
const db ="mongodb+srv://abdelkader:Mokht%40r2021@items-todos.yjq2j.mongodb.net/test";

mongoose.connect(db, {useNewUrlParser: true })
.then(() => console.log("successfully connected to db"))
.catch(err => console.error(err));

//Schema
let todoSchema = new Schema({
    text:String,
    isCompleted: Boolean
});
//Le type d'objet
let Todo = mongoose.model('Todo', todoSchema);



//Routes
app.use("/todos", router);



//to add to DB
router.route('/add').post((req,res) => {

    let todo = new Todo({text:"text", isCompleted:true});
    console.log(res);
    todo.save()
    .then(() => {
        console.log("todo successfully created");
        res.status(200).json("todo successfully created " + todo);
    })
    .catch(err => {
        console.error(err);
        res.status(400).json(err);
    });
    
    
});


//get all documents from DB
router.route('/').get((req, res) => {
    Todo.find((err, items) => {
        
        if(err) {
            res.status(400).json(err);
            console.log(err);
        } else {
            res.status(200).json(items);
            console.log(items);
            
        }
    })
});


  

// update todo
router.route('/:id').put((req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if(err) {res.send(err);}
        todo.text = req.body.text; 
        todo.isCompleted = req.body.isCompleted;
        todo.save(err => {
            if(err) {res.send(err);}
            res.json('todo successfully updated');
        });
    });
});


// // remove from DB
// router.route('/:id').delete((req, res) => {
//     Todo.findByIdAndRemove(req.params.id, (err, todo) => {
//         if(err) {res.send(err);}
        
//         todo.save(err => {
//             if(err) {res.send(err);}
//             console.log( 'todo deleted successfully');
//             res.status(200).json({message: 'todo deleted successfully'});
//         });
//     });
// });

//remove from DB
router.route("/:id").delete(function (req, res) {
    Todo.findByIdAndDelete(req.params.id, function (err, todo) {
      if (err) {
        res.send(err);
      }
    //   todo.save(function (err) {
    //     if (err) {
    //       res.send(err);
    //     }
    //     console.log("todo updated successfully");
    //     res.json({ message: "todo deleted successfully" });
    //   });
    res.json({ message: "todo deleted successfully" });
    });
  });




