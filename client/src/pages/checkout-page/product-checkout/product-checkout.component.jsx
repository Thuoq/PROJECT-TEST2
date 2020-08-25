import React from 'react';
import { connect } from 'react-redux';
import { decreaseItemToCart, addItemToCart, deleteItemToCart } from '../../../redux/cart/cart.action';
import './product-checkout.styles.scss';
import { DeleteOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ProductItem from '../product-item/product-item.component';
import ModelCheckout from '../pay-checkout/model-checkout.component';
const ProductCheckOut = ({
  cartCheckout, decreaseItemToCart, addItemToCart, deleteItemToCart,
}) => (
  <div className="product-container">
    <ProductItem cartItem={cartCheckout} />

    <div className="product-quantity">
      <CaretDownOutlined onClick={() => decreaseItemToCart(cartCheckout)} />
      <span>{cartCheckout.quantity}</span>
      <CaretUpOutlined onClick={() => addItemToCart(cartCheckout)} />
    </div>
    <div className="product-delete">
      <Button onClick={() => deleteItemToCart(cartCheckout)} type="text" icon={<DeleteOutlined />} />

    </div>
    <ModelCheckout/>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  decreaseItemToCart: (cartItem) => dispatch(decreaseItemToCart(cartItem)),
  addItemToCart: (cartItem) => dispatch(addItemToCart(cartItem)),
  deleteItemToCart: (cartItem) => dispatch(deleteItemToCart(cartItem)),

});

export default connect(null, mapDispatchToProps)(ProductCheckOut);
