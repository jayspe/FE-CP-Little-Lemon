import {Link} from 'react-router-dom';

function Navigation(props) {
    return (
        <menu className={`navbar-menu ${props.device}`}>
            {props.device==="mobile" ? "" : <Link to="/"><img src={require('../assets/nav-logo.png')} alt="Little Lemon logo" className="nav-image"></img></Link>}
            <Link className="hover-effect" to={"/"} onClick={() => this.menuSelected()}><h1>Home</h1></Link>
            <Link className="hover-effect" to={"/about"} onClick={() => this.menuSelected()}><h1>About</h1></Link>
            <a className="hover-effect" href={require('../assets/menu.webp')} target="_blank" rel="noreferrer"><h1>Menu</h1></a>
            <Link className="hover-effect" to={"/reservations"} onClick={() => this.menuSelected()}><h1>Reservations</h1></Link>
            <Link className="hover-effect" to={"/order"} onClick={() => this.menuSelected()}><h1>Order</h1></Link>
            <Link className="hover-effect" to="/login"><h1>Login</h1></Link>
        </menu>
    );
}
export default Navigation