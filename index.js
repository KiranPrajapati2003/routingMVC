const express = require('express');
const { db } = require('./config/database.js');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

app.set('view engine', 'ejs');
// app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routers/index.js'));

app.listen(8081, (err) => {
    if (!err) {
        db();
        console.log("server start\n http://localhost:8081");
    }
})