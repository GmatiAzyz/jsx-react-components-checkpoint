import React from 'react';
import product from '../product';

const Name = () => {
  return (
    <h2 className="product-name">
      {product.name}
    </h2>
  );
};

export default Name;
