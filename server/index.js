const express = require('express');
const massive = require('massive');
require('dotenv').config();
const sessions = require('express-session')
const bodyParser = require('body-parser');
const ctrl = require('./controller')

const { CONNECTION_STRING,SERVER_PORT,SESSION_SECRET} = process.env

const app = express()

massive(CONNECTION_STRING).then(db => {
    app.set('db',db);
    console.log('database connected')
})

app.use(bodyParser.json())
app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.post('/auth/register',ctrl.register)
app.post('/auth/login',ctrl.login)
app.get(`/api/getposts/:id`,ctrl.getPosts)
// app.get('/api/getonepost/:id',ctrl.getOnePost)

app.listen(SERVER_PORT, () => {console.log('Hejsan från',SERVER_PORT)})