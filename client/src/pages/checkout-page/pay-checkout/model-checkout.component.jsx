import React , {useState} from 'react';
import PropTypes from 'prop-types';

import SuccessCheckout from './success-checkout.component';
import { Modal , Table } from 'antd';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {selectOpenModelAddress} from '../../../redux/check-out/check-out.selector';
import {columns} from './model-checkout-prefix-layout';
import { selectCurrentUser } from '../../../redux/user/user.selector';
import ModelForm from './model-form.component';
import { checkOutStart, toggleModelCheckOut } from '../../../redux/check-out/check-out.action';
import { selectSuccess } from '../../../redux/check-out/check-out.selector';

// HANDLE TABLE EVENT



const ModelCheckout = ({openModelAddress,toggleModelCheckOut,success,currentUser,checkOutStart,...props}) => {
  const [addressShip , setAddressShip] = useState(" ");
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setAddressShip(selectedRows[0].name)
    },
    selections: true
  };
  return (
    <>
  <Modal
    width={650}
    title="Please Choose Address"
    visible={openModelAddress}
    okText= "Complete Shopping"
    onCancel={() => toggleModelCheckOut()}
    onOk = {() => checkOutStart(addressShip) }
  >
    {
      !success ? (
        <>
          <Table
            pagination={false}
            rowSelection={{
              type: "radio",
              ...rowSelection
            }}
            rowKey='_id'
            columns={columns}
            dataSource = {currentUser.address}
          />
            <br/>
            <ModelForm/>
        </>
      ) : (<SuccessCheckout/>)
    }
  </Modal>
  
  </>
)};

const mapStateProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  success: selectSuccess,
  openModelAddress : selectOpenModelAddress
});
const mapDispatchToProps = dispatch => ({
  checkOutStart : address => dispatch(checkOutStart(address)),
  toggleModelCheckOut : () => dispatch(toggleModelCheckOut())
})

ModelCheckout.propTypes = {
  openModelAddress: PropTypes.bool,
  toggleModelCheckOut: PropTypes.func,
  currentUser: PropTypes.shape({
    name : PropTypes.string
  }),
  success: PropTypes.bool,
  checkOutStart: PropTypes.func,
}

export default connect(mapStateProps,mapDispatchToProps)(ModelCheckout);
