import React from 'react';
import product from '../product';

const Price = () => {
  return (
    <div className="product-price">
      <span className="price-currency">$</span>
      <span className="price-amount">{product.price.toFixed(2)}</span>
    </div>
  );
};

export default Price;
