const express = require('express');
const massive = require('massive');
require('dotenv').config();
const bodyParser = require('body-parser');
const ctrl = require('./controller')

const { CONNECTION_STRING,SERVER_PORT} = process.env

const app = express()

massive(CONNECTION_STRING).then(db => {
    app.set('db',db);
    console.log('database connected')
})

app.use(bodyParser.json())

app.post('/auth/register',ctrl.register)
app.post('/auth/login',ctrl.login)

app.listen(SERVER_PORT, () => {console.log('Hejsan från',SERVER_PORT)})