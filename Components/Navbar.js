import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/Navbar.css';

const Navbar = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <nav className="navbar">
            <h1><i>ShoesKart</i></h1>
            <div className="cart">
                <span>Cart: {cartItems.length}</span>
            </div>
        </nav>
    );
};

export default Navbar;
