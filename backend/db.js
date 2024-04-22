const mongoose=require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongodb+srv://amansingh:nyrtaz-5kynfI-satdas@cluster0.es1eowy.mongodb.net/todos");
const todoSchema =mongoose.Schema({
    title :String,
    description :String,
    completed: Boolean
})
const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo
}