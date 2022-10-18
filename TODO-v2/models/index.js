const mongoose = require("mongoose")

mongoose.connect("Use ur own connection string", {useNewUrlParser: true}).then(() => {
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

