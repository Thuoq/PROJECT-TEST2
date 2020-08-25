import React from 'react';
import './card-item-content.styles.scss';

const CardItemContent = ({ cartItem }) => (
  <ul className="cardItem-infor">
    <li>
      <span>PriceEN </span>
      {' '}
      : &nbsp;
      {cartItem.priceUSD}
      $
    </li>
    <li>
      <span>Weight :</span>
      {' '}
      {' '}
&nbsp;
      {cartItem.weight}
      KG
    </li>

    <li>
      <span> Origin </span>
      : &nbsp;
      {cartItem.origin}
    </li>

  </ul>
);

export default CardItemContent;
