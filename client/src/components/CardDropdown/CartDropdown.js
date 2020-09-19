import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import './CardDropdown.scss';

import { Button } from 'antd';

import { createStructuredSelector } from 'reselect';
import ItemDropdown from './ItemDropdown';
import {
  selectCartItem,
  selectTotalPrice,
} from '../../redux/cart/cart.selector';

const CartDropdown = ({ totalPrice, cartItems }) => (
  <div className="cart-hover">
    {!cartItems.length ? (
      <h1>Empty Cart</h1>
    ) : (
      <>
        <div className="select-items">
          <table>
            <tbody>
              {cartItems.map((cartItem, idx) => (
                <ItemDropdown key={idx} cartItem={cartItem} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="select-total">
          <span>total:</span>
          <h5>{Math.round(totalPrice * 100) / 100}$</h5>
        </div>
        <div className="select-button">
          <Button
            href="/checkout"
            type="link"
            style={{
              height: '6.5rem',
            }}
            className="view-card"
          >
            GO TO CHECK OUT
          </Button>
        </div>
      </>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  totalPrice: selectTotalPrice,
});

CartDropdown.propTypes = {
  cartItems: PropTypes.array,
  totalPrice: PropTypes.number,
};

export default connect(mapStateToProps)(CartDropdown);
