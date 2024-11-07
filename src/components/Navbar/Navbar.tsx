import './Navbar.css';

export const Navbar = () => {
    return(
        <nav>
            <a href="/">
                <figure>
                    <img src="vite.svg" alt="logo" />
                    <figcaption>React</figcaption>
                </figure>
            </a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}