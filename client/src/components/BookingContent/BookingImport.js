import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import './BookingContent.scss';
import { Layout, Table, Spin, Input } from 'antd';

import preFix from '../../configs/Booking/BookingContent';
import { createStructuredSelector } from 'reselect';
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

class BookingImport extends React.Component {
  state = {
    columnsPrefix: preFix(this),
    status: '',
    bookingsChoose: [],
  };
  handleSearchWaybill = (values) => {
    const { getBookingWayBillStart } = this.props;
    getBookingWayBillStart(values);
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
    const { getBookingWayBillStart } = this.props;
    getBookingWayBillStart();
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
    const { isLoading } = this.props;

    return (
      <Layout style={{ padding: '0 2.4rem 2.4rem' }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 600,
          }}
        >
          <Input.Search
            size="large"
            enterButton
            placeholder="Search Booking By WayBill"
            onSearch={this.handleSearchWaybill}
            style={{ marginBottom: '2rem' }}
          />
          <ExportCSV csvData={bookingsChoose} fileName="booking-data" />
          <br />
          <ButtonGroupChosen bookingsChoose={bookingsChoose} />

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
  historyBooking: selectHistoryBooking,
  isLoading: selectIsLoadingBOOKING,
});

const mapDispatchToProps = (dispatch) => ({
  getBookingStart: () => dispatch(getBookingStart()),
  updateCompleteStart: (key) => dispatch(updateCompleteStart(key)),
  getBookingWayBillStart: (waybill) =>
    dispatch(getBookingWayBillStart(waybill)),
});

/* TYPES */
BookingImport.propTypes = {
  historyBooking: PropTypes.array.isRequired,

  isLoading: PropTypes.bool.isRequired,
  getBookingStart: PropTypes.func.isRequired,
  updateCompleteStart: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BookingImport);
