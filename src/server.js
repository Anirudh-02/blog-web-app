const express = require('express')
const {db} = require('./db/model')
const {userRoute} = require('./routes/users')
const {postRoute} = require('./routes/posts')

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/', express.static(__dirname + '/public'))
app.use('/login', (req, res) => {
    res.render('index')
})


db.sync({alter: true})
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server started at http://localhost:3000');
        })
    })
    .catch((err) => {
        console.error(new Error('Could not start database'));
        console.error(err);
    })