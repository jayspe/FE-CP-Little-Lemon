import HeroImage from '../../../assets/images/food_ingredients.webp';
//import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header className="reserve-table">
            <img className="header-reserve"src={HeroImage} alt="Little Lemon Ingredients"></img>
            <div className="reserve-header-text" onClick={() => this.Heading()}>
                <h1>Reserve a table</h1>
            </div>
        </header>
    );
}