const express = require('express')
const { Cards } = require('./db')
const { generateCardSchema } = require('./validation')
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
    const card = await Cards.create({
        name,
        description,
        interests,
        linkedinUrl,
        xUrl
    })

    res.json({card})
})

app.listen(3000, () => {
    console.log("App is listening on port 3000!")
})