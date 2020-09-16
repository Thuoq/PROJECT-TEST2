import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { isLogin } from '../../../helpers/auth';
import ModelCheckout from './ModelCheckout.';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import './PayCheckout.scss';
import { createStructuredSelector } from 'reselect';
import { selectTotalPrice } from '../../../redux/cart/cart.selector';

const PayCheckOut = ({ totalItem, history }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="pay-container">
      <h2>Order Summary</h2>
      <div>
        <p>Total : </p>
        <p>{Math.round(totalItem * 100) / 100}$</p>
      </div>
      <Button
        type="primary"
        style={{ width: '100%' }}
        onClick={() =>
          !isLogin() ? history.push('/signInSignUp') : setVisible(!visible)
        }
      >
        Check Out
      </Button>
      <ModelCheckout visible={visible} setVisible={setVisible} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  totalItem: selectTotalPrice,
});

PayCheckOut.propTypes = {
  totalItem: PropTypes.number,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(connect(mapStateToProps)(PayCheckOut));
