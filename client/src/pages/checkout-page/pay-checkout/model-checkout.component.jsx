import React , {useState} from 'react';
import PropTypes from 'prop-types';

import SuccessCheckout from './success-checkout.component';
import { Modal , Table , Spin} from 'antd';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectIsFetchingCheckOut} from '../../../redux/check-out/check-out.selector';
import {columns} from '../../../configs/model-checkout.config';
import { selectCurrentUser } from '../../../redux/user/user.selector';
import ModelForm from './model-form.component';
import { checkOutStart } from '../../../redux/check-out/check-out.action';
import { selectSuccess } from '../../../redux/check-out/check-out.selector';

// HANDLE TABLE EVENT



const ModelCheckout = ({visible,setVisible,isFetchingCheckOut,success,currentUser,checkOutStart,...props}) => {
  const [addressShip , setAddressShip] = useState(" ");
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setAddressShip(selectedRows[0].name)
    },
    //selections: true
  };
  
  return (
   
      <Modal
        width={650}
        title="Please Choose Address"
        visible={visible}
        okText= "Complete Shopping"
        onCancel={() => setVisible(!visible)}
        onOk = {() => checkOutStart(addressShip) }
      >
         <Spin spinning={isFetchingCheckOut} size="large">
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
         </Spin>
      </Modal>
)};

const mapStateProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  success: selectSuccess,
  
  isFetchingCheckOut: selectIsFetchingCheckOut
});
const mapDispatchToProps = dispatch => ({
  checkOutStart : address => dispatch(checkOutStart(address)),
})

ModelCheckout.propTypes = {
  
  currentUser: PropTypes.shape({
    name : PropTypes.string
  }),
  success: PropTypes.bool,
  checkOutStart: PropTypes.func,
}

export default connect(mapStateProps,mapDispatchToProps)(ModelCheckout);
