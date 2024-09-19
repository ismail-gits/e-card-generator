export function Card({card}) {
    return (
        <div id="card">
            <h1><b>card.name</b></h1>
            <h2>card.description</h2>
            <h1><b>Interests</b></h1>
            {card.interests.map((interest) => {
                <h2>{interest}</h2>
            })}

            <button onClick={goToUrl(card.linkedinUrl)}>Linkedin</button>
            <button onClick={goToUrl(card.xUrl)}>X</button>
        </div>
    )
}

function goToUrl(url) {
    window.location.href = url
}