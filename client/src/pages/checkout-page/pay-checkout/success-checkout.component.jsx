import React from 'react';
import PropTypes from 'prop-types';

import {setCheckOuToFalse} from '../../../redux/check-out/check-out.action';
import {connect} from 'react-redux'
import { Result, Button , Modal} from 'antd';
import { createStructuredSelector } from 'reselect';
import { selectSuccess } from '../../../redux/check-out/check-out.selector';


const SuccessCheckout = ({setCheckOuToFalse,success}) => (
  <Modal
    footer = {null}
    visible={success}
    onCancel = {() =>setCheckOuToFalse()}
  >
    <Result
      status="success"
      title="Thanks for buy Product at my shop"
      subTitle="Thanks you and see You Again"
      extra={[
        <Button type="link" href="/productQuery" onClick ={() => setCheckOuToFalse()} key="buy" >Buy Again</Button>,
      ]}
    />
  </Modal>
);

const mapDispatchToProps = dispatch => ({
  setCheckOuToFalse : () => dispatch(setCheckOuToFalse())
})
const mapStateToProps = createStructuredSelector({
  success: selectSuccess
})
SuccessCheckout.propTypes = {
  setCheckOuToFalse: PropTypes.func,
  success: PropTypes.bool
}

export default connect(mapStateToProps,mapDispatchToProps)(SuccessCheckout) ;
