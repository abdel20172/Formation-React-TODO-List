const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const Schema = mongoose.Schema;
const router = express.Router();
app.use(bodyParser.json());
app.listen(4000, () => {
    console.log('server is up and running on port 4000');
});

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
app.use('/todos', router);

router.route('/add').post((req,res) => {

    let todo = new Todo({text:"text", isCompleted:false});
    console.log(res);
    todo.save()
    .then(() => console.log(todo.text))
    .catch(err => console.error(err));
    
    
});