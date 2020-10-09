import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './PayCheckout.scss';
import { createStructuredSelector } from 'reselect';
import { selectTotalPrice } from '../../../redux/cart/cart.selector';
import ModelCheckoutPayment from './ModelCheckoutPayment';

const PayCheckOut = ({ totalItem }) => {
  return (
    <div className="pay-container">
      <h2>Order Summary</h2>
      <div>
        <p>Total : </p>
        <p>{Math.round(totalItem * 100) / 100}$</p>
      </div>

      {/* <StripeButton /> */}
      <ModelCheckoutPayment />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  totalItem: selectTotalPrice,
});

PayCheckOut.propTypes = {
  totalItem: PropTypes.number,
};

export default withRouter(connect(mapStateToProps)(PayCheckOut));
