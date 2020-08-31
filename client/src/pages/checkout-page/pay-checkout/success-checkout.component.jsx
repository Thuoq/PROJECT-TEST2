import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {setCheckOuToFalse} from '../../../redux/check-out/check-out.action';
import {connect} from 'react-redux'
import { Result , Modal} from 'antd';
import { createStructuredSelector } from 'reselect';
import { selectSuccess ,selectIsFetchingCheckOut} from '../../../redux/check-out/check-out.selector';


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
        <Link  to="/shop" onClick ={() => setCheckOuToFalse()} key="buy" >Buy Again</Link>,
      ]} 
    />
  </Modal>
);

const mapDispatchToProps = dispatch => ({
  setCheckOuToFalse : () => dispatch(setCheckOuToFalse())
})


const mapStateToProps = createStructuredSelector({
  success: selectSuccess,
  isFetching: selectIsFetchingCheckOut
})
SuccessCheckout.propTypes = {
  setCheckOuToFalse: PropTypes.func,
  success: PropTypes.bool
}

export default connect(mapStateToProps,mapDispatchToProps)(SuccessCheckout) ;
