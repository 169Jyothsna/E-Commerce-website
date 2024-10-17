import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
    return (
        <CartProvider>
            <ProductProvider>
                <Navbar />
                <div className="main-container">
                    <ProductList />
                    <Cart />
                </div>
            </ProductProvider>
        </CartProvider>
    );
}

export default App;
