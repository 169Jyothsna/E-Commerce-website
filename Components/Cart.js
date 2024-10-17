import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
    const { cartItems, increment, decrement, removeFromCart, getTotalPrice } = useContext(CartContext);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <div className="cart-buttons">
                                <button onClick={() => increment(item)}>+</button>
                                <button onClick={() => decrement(item)}>-</button>
                                <button onClick={() => removeFromCart(item)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <h3>Total Price: Rs.{getTotalPrice()}</h3>
                </>
            )}
        </div>
    );
};

export default Cart;
