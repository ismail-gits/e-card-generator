const express = require('express')
const { Cards } = require('./db')
const { generateCard } = require('./validation')
const app = express()

app.use(express.json())