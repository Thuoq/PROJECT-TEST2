// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// import { Modal, Table, Spin } from 'antd';
// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';
// import SuccessCheckout from './SuccessCheckout';
// import {
//   selectIsFetchingCheckOut,
//   selectSuccess,
// } from '../../../redux/check-out/check-out.selector';

// import { selectCurrentUser } from '../../../redux/user/user.selector';
// import ModelForm from './ModelForm';
// import { checkOutStart } from '../../../redux/check-out/check-out.action';

// // HANDLE TABLE EVENT

// const ModelCheckout = ({
//   visible,
//   setVisible,
//   isFetchingCheckOut,
//   success,
//   currentUser,
//   checkOutStart,
// }) => {
//   const [addressShip, setAddressShip] = useState(' ');
//   const rowSelection = {
//     onChange: (selectedRowKeys, selectedRows) => {
//       setAddressShip(selectedRows[0].name);
//     },
//     // selections: true
//   };

//   return (
//     <Modal
//       width={650}
//       title="Please Choose Address"
//       visible={visible}
//       okText="Complete Shopping"
//       onCancel={() => setVisible(!visible)}
//       onOk={() => checkOutStart({ address: addressShip })}
//     >
//       <Spin spinning={isFetchingCheckOut} size="large">
//         {!success ? (
//           <>
//             <Table
//               pagination={false}
//               rowSelection={{
//                 type: 'radio',
//                 ...rowSelection,
//               }}
//               rowKey="_id"
//               columns={columns}
//               dataSource={currentUser ? currentUser.address : []}
//             />
//             <br />
//             <ModelForm />
//           </>
//         ) : (
//           <SuccessCheckout />
//         )}
//       </Spin>
//     </Modal>
//   );
// };

// const mapStateProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   success: selectSuccess,

//   isFetchingCheckOut: selectIsFetchingCheckOut,
// });
// const mapDispatchToProps = (dispatch) => ({
//   checkOutStart: (address) => dispatch(checkOutStart(address)),
// });

// ModelCheckout.propTypes = {
//   currentUser: PropTypes.shape({
//     name: PropTypes.string,
//   }),
//   success: PropTypes.bool,
//   checkOutStart: PropTypes.func,
// };

// export default connect(mapStateProps, mapDispatchToProps)(ModelCheckout);
