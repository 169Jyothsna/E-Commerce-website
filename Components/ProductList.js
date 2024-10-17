import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductItem from './ProductItem';
import '../styles/ProductList.css';

const ProductList = () => {
    const { products } = useContext(ProductContext);

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
