// 1st layer(env config)
const dotenv = require('dotenv');
dotenv.config();

// 2nd layer(database config)
const mongoose = require('mongoose')
mongoose.connect(process.env.DB)

// 3rd layer(server create)
const express = require('express');
const { signup, login } = require('./controller/user.controller');
const app = express();
app.listen(process.env.PORT || 8080)

// 4th layer (middlewares)
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('view'))

app.post('/signup', signup)
app.post('/login', login)