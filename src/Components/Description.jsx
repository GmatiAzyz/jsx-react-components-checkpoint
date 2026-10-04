import React from 'react';
import product from '../product';

const Description = () => {
  return (
    <p className="product-description">
      {product.description}
    </p>
  );
};

export default Description;
