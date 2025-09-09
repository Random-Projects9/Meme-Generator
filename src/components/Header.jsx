import image from "../assets/troll.png"

export default function Header(){
    return(
        <header className="header">
            <img 
                src={image}
            />
            <h1>Meme Generator</h1>
        </header>
    )
}