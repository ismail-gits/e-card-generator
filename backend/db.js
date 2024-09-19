const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:smile72425@cluster0.el80i.mongodb.net/e-card-generator")
.then(() => console.log("Connected to mongodb successfully!"))
.catch(() => console.log("Failed to connect to mongodb!"))

const cardSchema = new mongoose.Schema({
    name: String,
    description: String,
    interests: Array,
    linkedinUrl: String,
    xUrl: String
})

const Cards = mongoose.model('cards', cardSchema)

module.exports = {
    Cards
}