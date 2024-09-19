const zod = require('zod')

const generateCardSchema = zod.object({
    name: zod.string().min(1),
    description: zod.string().min(1),
    interests: zod.array(zod.string()),
    linkedinUrl: zod.string().url(),
    xUrl: zod.string().url()
})

const retrieveCardSchema = zod.object({
    id: zod.string().min(1)
})

module.exports = {
    generateCardSchema,
    retrieveCardSchema
}