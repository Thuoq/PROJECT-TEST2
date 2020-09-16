import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import {
  DeleteOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import { connect } from 'react-redux';
import {
  decreaseItemToCart,
  addItemToCart,
  deleteItemToCart,
} from '../../../redux/cart/cart.action';
import './ProductCheckout.scss';

import ProductItem from '../ProductItem/ProductItem';

const ProductCheckOut = ({
  cartCheckout,
  decreaseItemToCart,
  addItemToCart,
  deleteItemToCart,
}) => (
  <div className="product-container">
    <ProductItem cartItem={cartCheckout} />

    <div className="product-quantity">
      <CaretDownOutlined onClick={() => decreaseItemToCart(cartCheckout)} />
      <span>{cartCheckout.quantity}</span>
      <CaretUpOutlined onClick={() => addItemToCart(cartCheckout)} />
    </div>
    <div className="product-delete">
      <Button
        onClick={() => deleteItemToCart(cartCheckout)}
        type="text"
        icon={<DeleteOutlined />}
      />
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  decreaseItemToCart: (cartItem) => dispatch(decreaseItemToCart(cartItem)),
  addItemToCart: (cartItem) => dispatch(addItemToCart(cartItem)),
  deleteItemToCart: (cartItem) => dispatch(deleteItemToCart(cartItem)),
});

ProductCheckOut.propTypes = {
  decreaseItemToCart: PropTypes.func,
  addItemToCart: PropTypes.func,
  deleteItemToCart: PropTypes.func,
  cartCheckout: PropTypes.shape({
    quantity: PropTypes.number,
  }),
};

export default connect(null, mapDispatchToProps)(ProductCheckOut);
