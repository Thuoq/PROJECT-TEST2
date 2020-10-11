import React from 'react';
import PropTypes from 'prop-types';

import './CardContent.scss';

const CardContent = ({ cartItem }) => (
  <ul className="cardItem-infor">
    <li>
      <span>PriceEN </span> : &nbsp;
      {cartItem.priceUSD.toFixed(2)}$
    </li>
    <li>
      <span>Weight :</span> &nbsp;
      {cartItem.weight.toFixed(2)}
      KG
    </li>

    <li>
      <span> Origin </span>: &nbsp;
      {cartItem.origin}
    </li>
  </ul>
);

CardContent.propTypes = {
  cartItem: PropTypes.shape({
    priceUSD: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired,
  }),
};

export default CardContent;
