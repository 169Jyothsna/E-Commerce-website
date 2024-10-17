import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-item">
            <img src={product.img} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>Rs.{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;
