import { useState } from "react"
import "./GenerateCard.css"

export function GenerateCard({setCard, setIsCardGenerated}) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [interests, setInterests] = useState([])
    const [linkedinUrl, setLinkedinUrl] = useState("")
    const [xUrl, setXUrl] = useState("")

    function handleGenerateCard() {
        fetch("http://localhost:3000/generateCard", {
            method: "POST",
            body: JSON.stringify({
                name,
                description,
                interests,
                linkedinUrl,
                xUrl
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(async (response) => {
            const json = await response.json()
            setCard(json.card)
            setIsCardGenerated(true)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <input onChange={(e) => {
                const name = e.target.value
                setName(name)
            }} type="text" name="name" placeholder="Name" className="input-field"/><br />

            <input onChange={(e) => {
                const description = e.target.value
                setDescription(description)
            }} type="text" name="description" placeholder="Description" className="input-field"/><br />

            <input onChange={(e) => {
                const value = e.target.value
                const interest = value.split(', ')
                setInterests(interest)
            }} type="text" name="interests" placeholder="Interests" className="input-field"/><br />

            <input onChange={(e) => {
                const linkedinUrl = e.target.value
                setLinkedinUrl(linkedinUrl)
            }} type="text" name="linkedUrl" placeholder="Linkedin Url" className="input-field"/><br />

            <input onChange={(e) => {
                const xUrl = e.target.value
                setXUrl(xUrl)
            }} type="text" name="x" placeholder="X Url" className="input-field"/><br />

            <button onClick={handleGenerateCard} id="button">Generate Card</button>
        </div>
    )
}