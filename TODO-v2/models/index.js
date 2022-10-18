const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://TODO-sjp:TODOdb123@cluster0.cviz2u6.mongodb.net/todoList", {useNewUrlParser: true}).then(() => {
    console.log("Connected to DB")
}).catch(err => {
    console.log('DB Error!!!'+err)
})

const schema = new mongoose.Schema({
    Name: {
        type: String
    },
    Completed: {
        type: Boolean
    },
    Deleted: {
        type: Boolean
    }
})

module.exports = mongoose.model("todo", schema)

