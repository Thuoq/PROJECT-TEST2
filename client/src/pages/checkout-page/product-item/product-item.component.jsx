import React from 'react';
import './product-item.styles.scss';

const ProductItem = ({cartItem}) => (
  <div className="product-infor">
    <img
      alt=" PRODUCT"
      src={cartItem.photoURL}
    />
    <div className="product-title">
      <h2>{cartItem.nameEN}</h2>
      <p >{cartItem.priceUSD}$</p>
    </div>
  </div>
);

export default ProductItem;
