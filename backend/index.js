const express = require('express')
const { Cards } = require('./db')
const { generateCardSchema, retrieveCardSchema } = require('./validation')
const cors = require('cors')
const app = express()

app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173"
}))

// Generating card and storing it on mongodb
app.post('/generateCard', async (req, res) => {
    // input validation using zod
    const input = req.body
    const inputValidation = generateCardSchema.safeParse(input)
    

    if (!inputValidation.success) {
        console.log(inputValidation.error.errors)
        return res.status(400).json({message: "Invalid inputs"})
    }

    const { name, description, interests, linkedinUrl, xUrl } = req.body

    // Pusing card to mongodb
    await Cards.create({
        name,
        description,
        interests,
        linkedinUrl,
        xUrl
    })

    res.json({message: "E-Card Generated!"})
})

// Retrieving card from mongodb
app.get('/retrieveCard', async (req, res) => {
    // input validation using zod
    const input = req.body
    const inputValidation = retrieveCardSchema.safeParse(input)

    if (!inputValidation.success) {
        console.log(inputValidation.error.errors)
        return res.status(400).json({message: "Invalid id"})
    }

    const card = await Cards.findById(req.body.id)

    res.json({card})
})

app.listen(3000, () => {
    console.log("App is listening on port 3000!")
})