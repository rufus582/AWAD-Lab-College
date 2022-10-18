const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = 3000

app.use(express.json())
app.listen(port, () => console.log(`App is listening on port ${port}`))

const db = require("./models")

const routes = require("./routes/routes")
app.use('/todo', routes)

