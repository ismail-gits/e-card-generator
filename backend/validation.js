const zod = require('zod')

const generateCard = zod.object({
    name: zod.string().min(1),
    desription: zod.string().min(1),
    interests: zod.array(),
    linkedinUrl: zod.string().url(),
    xUrl: zod.string().url()
})

module.exports = {
    generateCard
}