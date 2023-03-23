import { useState } from "react";
import memesData from '../memesData.js'

export function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prev => ({ ...prev, [name]: value }))
    }

    function buttonClickHandler() {
        setMeme(prev => {
            let data = prev.randomImage
            while (data == prev.randomImage) data = allMemeImages.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url
            return { ...prev, randomImage: data }
        })
    }

    return (
        <main>
            <div className="form">
                <input type="text" name="topText" placeholder="Shut up" onChange={handleChange} />
                <input type="text" name="bottomText" placeholder="and take my money!" onChange={handleChange} />
                <button onClick={buttonClickHandler} type="submit">Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
