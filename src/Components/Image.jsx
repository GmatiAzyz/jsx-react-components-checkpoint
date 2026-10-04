import React from 'react';
import product from '../product';

const Image = () => {
  return (
    <div className="product-image-wrapper">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
    </div>
  );
};

export default Image;
