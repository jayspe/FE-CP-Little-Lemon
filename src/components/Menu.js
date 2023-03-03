import React from 'react';
import './Menu.css'
import { useNavigate } from 'react-router-dom'; // import useNavigate hook
import greeksalad from "../assets/images/greek_salad.jpg";
import bruschetta from "../assets/images/bruschetta.jpg"
import lemondesert from "../assets/images/lemon_dessert.jpg"
function Menu(){
    const navigate = useNavigate(); // initialize useNavigate hook

    const handleAddToCart = () => {
    navigate('/OrderOnline'); // navigate to OrderOnline component
  };
    return(
        <div className="menu-container">
        <h1 className="menu-title">This Week's Specials</h1>
        <button className="menu-button" >Online Menu</button>
        <div className="menu-items">
            <div className="menu-item">
                <img src={greeksalad} alt="greek salad" className="menu-item-image" style={{height:'200px' ,width:'200px'}}/>
                <h2 className="menu-item-title">Greek Salad</h2>
                    <p className="menu-item-description">Feta cheese, tomato, lettuce.</p>
                <div className='price-button'>
                    <p className="menu-item-price">$12.99</p>
                    <button className="menu-item-button" aria-label="On Click" onClick={handleAddToCart}>Add to Cart</button> 
                </div>
            </div>
            <div className="menu-item">
                <img src={bruschetta} alt="bruschetta" className="menu-item-image" style={{height:'200px' ,width:'200px'}}/>
                <h2 className="menu-item-title">Bruschetta</h2>
                <p className="menu-item-description">Bread, mango, green onions.</p>
                <div className='price-button'>
                    <p className="menu-item-price">$10.99</p>
                    <button className="menu-item-button" aria-label="On Click" onClick={handleAddToCart}>Add to Cart</button> {/* add onClick event */}
                </div>
            </div>
                <div className="menu-item">
                    <img src={lemondesert} alt="lemon_dessert" className="menu-item-image" style={{height:'200px' ,width:'200px'}}/>
                    <h2 className="menu-item-title">Lemon Desert</h2>
                    <p className="menu-item-description">Lemon bread, vanilla icing.</p>
                    <div className='price-button'>
                        <p className="menu-item-price">$8.50</p>
                        <button className="menu-item-button" aria-label="On Click" onClick={handleAddToCart}>Add to Cart</button> {/* add onClick event */}
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Menu;