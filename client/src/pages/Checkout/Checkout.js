import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import './Checkout.scss';
import { createStructuredSelector } from 'reselect';
import PayCheckOut from './PayCheckout/PayCheckout';
import ProductCheckOut from './ProductCheckout/ProductCheckout';
import { selectCartItem } from '../../redux/cart/cart.selector';
import ResultEmpty from './ResultEmpty/ResultEmpty';
import SuccessCheckout from './PayCheckout/SuccessCheckout';
import { selectSuccess } from '../../redux/check-out/check-out.selector';

const CheckoutPage = ({ cartItems, success }) => (
  <div className="container-checkout">
    {cartItems.length ? (
      <>
        <div className="product-checkout-page">
          {cartItems.map((el, idx) => (
            <ProductCheckOut key={idx} cartCheckout={el} />
          ))}
        </div>
        <PayCheckOut />
      </>
    ) : (
      <ResultEmpty />
    )}
    {!success ? null : <SuccessCheckout />}
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  success: selectSuccess,
});
CheckoutPage.propTypes = {
  cartItems: PropTypes.array,
  success: PropTypes.bool,
};

export default connect(mapStateToProps)(CheckoutPage);
