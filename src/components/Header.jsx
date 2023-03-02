import logo from '../assets/thumb32.png'

export function Header() {
    return (
        <header>
            <img src={logo} alt="Pug logo" />
            <h1>Memeable</h1>
            <h3>Pug meme generator</h3>
        </header>
    )
}
