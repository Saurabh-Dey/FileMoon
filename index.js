const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose')
mongoose.connect(process.env.DB)

const express = require('express');
const app = express();
