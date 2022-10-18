const express = require('express')
const app = express()
const port  = 3000

app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index', {
    title: "Hello There",
    message: "Hello World!!!"
}))

app.listen(port, () => console.log(`App is listening at port ${port}`))