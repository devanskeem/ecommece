const express = require('express')
const massive = require('massive')
require('dotenv').config()
const {SERVER_PORT, CONNECTION_STRING}
const app = express()

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('database set')
})
app.listen(SERVER_PORT, () => console.log('server listening on port', SERVER_PORT))