const express = require("express")
const app = express()
const todo = require("../models/index")

app.get("/", async (req, res) => {
    const list = await todo.find()
    res.json(list)
})

app.post("/", async (req, res) => {
    const list = await todo.create(req.body)
    return success(res, list)
})

app.put("/todos/:id", async (req, res) => {
    const list = await todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return success(res, list)
})

app.delete("/todos/:id", async (req, res, next) => {
    await todo.findByIdAndRemove(req.params.id)
    return success(res, "Deleted!")
})

const success = (res, payload) => res.status(200).json(payload)

module.exports = app