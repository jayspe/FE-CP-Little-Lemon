import HeroImage from '../../assets/images/food_ingredients.webp';
//import Menu from '../../components/Menu'
import { Link } from 'react-router-dom';

function Confirmation() {
    return (
        <header className="confirmation-header">
            <img className="confirmation-image"src={HeroImage} alt="Little Lemon Ingredients"></img>
            <section className="reserve-header-text">
                <h1>Your Reservation is Confirmed!</h1>
                <h4>A confirmation message has been sent to your email.</h4>
                <h4>Thanks for dining with us!</h4>
            </section>

            <section className="redirect-buttons">
                <a className="redirect-button" href={require('../../components/Menu')} target="_blank" rel="noreferrer">Browse Menu</a>
                <Link className="redirect-button" to="/order">Order Online</Link>
                <Link className="redirect-button" to="/">Home Page</Link>
            </section>
        </header>
    );
}
export default Confirmation;