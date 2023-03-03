import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <menu>
                <li className="img-footer">
                    <img src={require('../assets/footer-logo.png')} alt="Little Lemon footer logo"></img>
                </li>
                <li className = "contact" >
                    <h1 className="footer-header">Navigation</h1>
                    <ul className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <a href={require('../assets/menu.webp')} target="_blank" rel="noreferrer">Menu</a>
                        <Link to="/reservations">Reservations</Link>
                        <Link to="/order">Order</Link>
                        <Link to="/login">Login</Link>
                    </ul>
                </li>

                <li>
                    <h1 className="footer-header">Contact</h1>
                    <ul className="footer-links">
                        <li>2531 Kembery Dr.</li>
                        <li>Chicago, IL</li>
                        <br></br>
                        <li>+ 1 (312) 516-2227</li>
                        <br></br>
                        <a href="mailto: info@little-lemon.com" target="_blank" rel="noreferrer">info@little-lemon.com</a>
                    </ul>
                </li>
                <li>
                    <h1 className="footer-header">Connect</h1>
                    <ul className="footer-links">
                        <a href="https://www.facebook.com/thelittlelemon/" target="_blank" rel="noreferrer">Facebook</a>
                        <a href="https://www.instagram.com/littlelemon/" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://www.twitter.com/littlelemon/" target="_blank" rel="noreferrer">Twitter</a>
                      </ul>
                </li>
            </menu>
        </footer>
    );
}
export default Footer;