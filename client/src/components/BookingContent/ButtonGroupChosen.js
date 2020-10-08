import React from 'react';
import { Button, Popconfirm, message, Col, Row } from 'antd';
import { updateCompleteMultipleUser } from '../../redux/booking/booking-action';
import { connect } from 'react-redux';

function updateFetchComplete(cb, arrayData, status) {
  if (!arrayData.length) {
    message.info('NO USER CHOOSE');
  } else {
    const dataFetch = Object.assign({}, { bookings: arrayData, status });
    return cb(dataFetch);
  }
  return;
}

const ButtonGroupChosen = ({ bookingsChoose, updateCompleteMultipleUser }) => {
  const statusArray = [
    'isGettingProduct',
    'isShippingProduct',
    'isReceivedProduct',
  ];
  return (
    <>
      <Row gutter={[48, 24]}>
        {statusArray.map((status, idx) => (
          <Col span={8} key={idx}>
            <Popconfirm
              title="Are you sure Is Complete ?"
              okText="Yes"
              cancelText="No"
              onCancel={() => message.error('U click on No')}
              onConfirm={
                () =>
                  updateFetchComplete(
                    updateCompleteMultipleUser,
                    bookingsChoose,
                    status
                  )
                // handleComplete({
                //   key: record.key,
                //   id: record._id,
                //   status,
                // })
              }
            >
              <Button type="primary">
                {status.slice(2, status.length)} All User Chosen
              </Button>
            </Popconfirm>
          </Col>
        ))}
      </Row>
      <Row gutter={[48, 24]}>
        {statusArray.map((status, idx) => (
          <Col span={8} key={idx + 1}>
            <Popconfirm
              title="Are you sure Is Complete ?"
              okText="Yes"
              cancelText="No"
              onCancel={() => message.error('U click on No')}
              onConfirm={
                () =>
                  updateFetchComplete(
                    updateCompleteMultipleUser,
                    bookingsChoose,
                    status
                  )
                // handleComplete({
                //   key: record.key,
                //   id: record._id,
                //   status,
                // })
              }
            >
              <Button type="primary">
                Undo {status.slice(2, status.length)} All User Chosen
              </Button>
            </Popconfirm>
          </Col>
        ))}
      </Row>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCompleteMultipleUser: (arrays) =>
    dispatch(updateCompleteMultipleUser(arrays)),
});
export default connect(null, mapDispatchToProps)(ButtonGroupChosen);
