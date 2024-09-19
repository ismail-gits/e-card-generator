import { useState } from "react";

function App() {
  const [card, setCard] = useState([])

  fetch("http://localhost:3000/retriveCard")
  .then(async (response) => {
    const json = await response.json()
    setCard(json.card)
  })

  return (
    <div>

    </div>
  )
}

export default App