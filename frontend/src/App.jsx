import { useState } from "react"
import { Card } from "./components/Card"
import { GenerateCard } from "./components/GenerateCard"
import "./app.css"

function App() {
  const [card, setCard] = useState({})
  const [isCardGenerated, setisCardGenerated] = useState(false)

  return (
    <div id="app">
      <div>
        <GenerateCard setCard={setCard} setisCardGenerated={setisCardGenerated}></GenerateCard>
      </div>

      <div>
        {isCardGenerated && <Card card={card}></Card>}
      </div>
    </div>
  )
}

export default App