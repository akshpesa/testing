// Shop.js
import React from 'react';
import './Shop.css';

const products = [
  { id: 1, category: 'Toys', name: 'Toy Car', price: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VhJhebNNaNAwKt38WdcI4M9IScKO3dIf-g&usqp=CAU' },
  { id: 2, category: 'Toys', name: 'Action Figure', price: 15, image: 'data:image/jpeg;base64,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' },
  { id: 3, category: 'Books', name: 'Wonder', price: 20, image: 'data:image/jpeg;base64,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' },
  { id: 4, category: 'Books', name: 'Raina', price: 25, image: 'data:image/jpeg;base64,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' },
];

const Shop = ({ addToCart }) => {
  return (
    <div className="shop-container">
      <h1 className="shop-header">Shop</h1>
      <div className="shop-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
