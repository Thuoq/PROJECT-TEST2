import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import './checkout-page.styles.scss';
import { createStructuredSelector } from 'reselect';
import PayCheckOut from './pay-checkout/pay-checkout.component';
import ProductCheckOut from './product-checkout/product-checkout.component';
import { selectCartItem } from '../../redux/cart/cart.selector';
import ResultEmpty from './result-empty/result-empty.component';
import SuccessCheckout from './pay-checkout/success-checkout.component';
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
