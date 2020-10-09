import React from 'react';

import { Col, Button, Divider } from 'antd';
import StripeButton from '../../../components/index';
import { createStructuredSelector } from 'reselect';
import {
  selectTotalPrice,
  selectCartItem,
} from '../../../redux/cart/cart.selector';
import { connect } from 'react-redux';
const ListUserCart = ({ totalItem, cartItems }) => (
  <Col span={12}>
    <div className="place-order">
      <h4>Your Order</h4>
      <div className="order-total">
        <ul className="order-table">
          <li>
            Product <span>Total</span>
          </li>
          {cartItems.map((cartItem, idx) => (
            <li key={idx} className="fw-normal">
              <img src={cartItem.photoURL} alt="IMG_PRODUCT" />x{' '}
              {cartItem.quantity} <span>$ {cartItem.priceUSD}</span>
            </li>
          ))}

          <li className="total-price">
            Total <span> $ {Math.round(totalItem * 100) / 100}</span>
          </li>
        </ul>

        <div className="order-btn">
          <Button type="submit" className=" place-btn">
            CHECK OUT
          </Button>
          <Divider>OR PAY WITH Card</Divider>
          <StripeButton price={Math.round(totalItem * 100) / 100} />
        </div>
      </div>
    </div>
  </Col>
);
const mapStateToProps = createStructuredSelector({
  totalItem: selectTotalPrice,
  cartItems: selectCartItem,
});

export default connect(mapStateToProps)(ListUserCart);
