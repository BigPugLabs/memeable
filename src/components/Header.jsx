import logo from '../assets/thumb32.png'

export function Header() {
    return (
        <header>
            <img src={logo} alt="Pug logo" />
            <h2>Memeable</h2>
            <h4>Pug meme generator</h4>
        </header>
    )
}
