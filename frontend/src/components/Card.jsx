import "./Card.css"

export function Card({card}) {
    const goToUrl = (url) => {
        window.open(url, "_blank", "noopener,noreferrer")
    };

    const { name, description, interests, linkedinUrl, xUrl } = card

    return (
        <div id="card">
            <h2><b>{name}</b></h2>
            <p>{description}</p>
            <h3>Interests</h3>
            <ul>
                {(interests || []).map((interest) => {
                    return <li>{interest}</li>
                })}
            </ul>
            
            <div className="buttonParent">
                <div>
                    <button onClick={() => goToUrl(linkedinUrl)} className="button">Linkedin</button>
                </div>
                <div>
                    <button onClick={() => goToUrl(xUrl)} className="button">X</button>
                </div>
            </div>

            
        </div>
    )
}