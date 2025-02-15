import image from '../assets/globe.png';

export default function Header() {
    return (
        <header>
            <img src={image} alt="globe icon"/>
            <h1>My Travel Journal</h1>
        </header>
    )
}