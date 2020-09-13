import React from 'react';
import PropTypes from 'prop-types';

import './card-item-content.styles.scss';

const CardItemContent = ({ cartItem }) => (
  <ul className="cardItem-infor">
    <li>
      <span>PriceEN </span> : &nbsp;
      {cartItem.priceUSD}$
    </li>
    <li>
      <span>Weight :</span> &nbsp;
      {cartItem.weight}
      KG
    </li>

    <li>
      <span> Origin </span>: &nbsp;
      {cartItem.origin}
    </li>
  </ul>
);

CardItemContent.propTypes = {
  cartItem: PropTypes.shape({
    priceUSD: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
  }),
};

export default CardItemContent;
