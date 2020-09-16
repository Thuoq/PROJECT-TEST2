import React from 'react';
import PropTypes from 'prop-types';

import './ProductItem.scss';

const ProductItem = ({ cartItem }) => (
  <div className="product-infor">
    <img alt=" PRODUCT" src={cartItem.photoURL} />
    <div className="product-title">
      <h2>{cartItem.nameEN}</h2>
      <p>{cartItem.priceUSD}$</p>
    </div>
  </div>
);
ProductItem.propTypes = {
  cartItem: PropTypes.shape({
    photoURL: PropTypes.string,
    nameEN: PropTypes.string,
    priceUSD: PropTypes.string,
  }),
};

export default ProductItem;
