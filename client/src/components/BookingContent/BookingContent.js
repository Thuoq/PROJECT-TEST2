import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import './BookingContent.scss';
import { Layout, Table, Spin, Input } from 'antd';

import preFix from '../../configs/Booking/BookingContent';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import {
  getBookingStart,
  updateCompleteStart,
  getBookingWayBillStart,
} from '../../redux/booking/booking-action';
import {
  selectHistoryBooking,
  selectIsLoadingBOOKING,
} from '../../redux/booking/booking-selector';
import ExportCSV from '../ExportCSV/ExportCSV';
import RadioBooking from './RadioBooking';
import ButtonGroupChosen from './ButtonGroupChosen';

const { Content } = Layout;

class BookingContent extends React.Component {
  state = {
    columnsPrefix: preFix(this),
    status: '',
    bookingsChoose: [],
  };
  handleSearchWaybill = (values) => {
    const { getBookingStart } = this.props;
    getBookingStart(values);
  };

  handleComplete = (key) => {
    const { updateCompleteStart } = this.props;
    updateCompleteStart(key);
  };

  handleChangeStatus = (status) => {
    this.setState({
      status,
    });
  };
  componentDidMount() {
    const { currentUser, getBookingStart } = this.props;
    const { columnsPrefix } = this.state;
    let newState;
    if (!currentUser.role.includes('admin')) {
      // FUNC AFTER BUG:
      newState = columnsPrefix.filter(
        (el) =>
          el.title !== 'isComplete' &&
          el.title !== 'Getting Product' &&
          el.title !== 'Shipping Product' &&
          el.title !== 'Received Product' &&
          el.title !== 'Detail Payment Card' &&
          el.title !== 'Detail About Card' &&
          el.title !== 'HAWB(Way Bill)'
      );
    } else {
      newState = columnsPrefix.filter((el) => el.title !== 'HAWB(Way Bill)');
    }
    this.setState({
      columnsPrefix: newState,
    });
    getBookingStart();
  }
  filterDataByStatus = () => {
    const { status } = this.state;
    const { historyBooking } = this.props;
    return historyBooking.filter((cartItem) => {
      if (status) return cartItem[status] === true;
      else if (!status) return cartItem;
      return cartItem;
    });
  };
  render() {
    const { columnsPrefix, bookingsChoose } = this.state;
    const { isLoading, currentUser } = this.props;

    return (
      <Layout style={{ padding: '0 2.4rem 2.4rem' }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 600,
          }}
        >
          {currentUser.role.includes('admin') ? (
            <>
              <Input.Search
                size="large"
                enterButton
                placeholder="Search Booking By Name"
                onSearch={this.handleSearchWaybill}
                style={{ marginBottom: '2rem' }}
              />
              <ExportCSV csvData={bookingsChoose} fileName="booking-data" />
              <br />
              <ButtonGroupChosen bookingsChoose={bookingsChoose} />
            </>
          ) : null}
          <RadioBooking handleChangeStatus={this.handleChangeStatus} />
          <Spin spinning={isLoading} size="large">
            <Table
              rowClassName={(record) =>
                record.receivedProduct ? 'background-silver' : null
              }
              bordered
              tableLayout="fixed"
              rowSelection={{
                getCheckboxProps: (record) => ({
                  disabled: record.receivedProduct === true,
                  // Column configuration not to be checked
                  name: record.name,
                }),
                onChange: (selectedRowKeys, selectedRows) => {
                  this.setState({ bookingsChoose: selectedRows });
                },
              }}
              scroll={{ x: 2000 }}
              dataSource={this.filterDataByStatus()}
              columns={columnsPrefix}
              rowKey="key"
            />
          </Spin>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  historyBooking: selectHistoryBooking,
  isLoading: selectIsLoadingBOOKING,
});

const mapDispatchToProps = (dispatch) => ({
  getBookingStart: (data) => dispatch(getBookingStart(data)),
  updateCompleteStart: (key) => dispatch(updateCompleteStart(key)),
  getBookingWayBillStart: (waybill) =>
    dispatch(getBookingWayBillStart(waybill)),
});

/* TYPES */
BookingContent.propTypes = {
  historyBooking: PropTypes.array.isRequired,
  currentUser: PropTypes.shape({
    role: PropTypes.oneOf(['user', 'admin']),
  }),
  isLoading: PropTypes.bool.isRequired,
  getBookingStart: PropTypes.func.isRequired,
  updateCompleteStart: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BookingContent);
