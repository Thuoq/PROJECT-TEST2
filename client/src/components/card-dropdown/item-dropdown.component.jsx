import React from 'react';
import PropTypes from 'prop-types';

import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const ItemDropdown = ({ cartItem, deleteItemToCart }) => (
  <div className="item-dropdown-container">
    <div className="item-dropdown-infor">
      <img alt="item-dropdown" src={cartItem.photoURL} />
      <div className="item-dropdown-title">
        <span>
          {cartItem.priceUSD}
          $ x
          {' '}
          {cartItem.quantity}
        </span>
      </div>
    </div>
    <div className="item-dropdown-delete">
      <Button onClick={() => deleteItemToCart(cartItem)}>
        <DeleteOutlined />
      </Button>

    </div>
  </div>
);

ItemDropdown.propTypes = {
  cartItem: PropTypes.shape({
    priceUSD: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    photoURL: PropTypes.string.isRequired
  }),
  deleteItemToCart: PropTypes.func
}

export default ItemDropdown;
