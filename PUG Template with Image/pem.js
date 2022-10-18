const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {
        title: "Hello!!!"
    })
})

app.listen(port, () => console.log(`App is listening at port ${port}`))