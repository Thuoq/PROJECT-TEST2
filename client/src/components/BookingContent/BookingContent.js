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
    filedSearchName: '',
    bookingsChoose: [],
  };
  handleChangeSearchUser = (e) => {
    this.setState({
      filedSearchName: e.target.value,
    });
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
    if (!currentUser.role.includes('admin')) {
      // FUNC AFTER BUG:
      let newState = columnsPrefix.filter(
        (el) =>
          el.title !== 'isComplete' &&
          el.title !== 'Getting Product' &&
          el.title !== 'Shipping Product' &&
          el.title !== 'Received Product' &&
          el.title !== 'Detail Payment'
      );
      this.setState({
        columnsPrefix: newState,
      });
    }
    getBookingStart();
  }

  render() {
    const {
      columnsPrefix,
      status,
      filedSearchName,
      bookingsChoose,
    } = this.state;
    const { historyBooking, isLoading, currentUser } = this.props;
    const dataFilterStatus = historyBooking.filter((cartItem) => {
      if (status && filedSearchName)
        return (
          cartItem[status] === true &&
          cartItem.name.toLowerCase().includes(filedSearchName.toLowerCase())
        );
      else if (!status && !filedSearchName) return cartItem;
      else if (status) return cartItem[status] === true;
      else if (filedSearchName)
        return cartItem.name
          .toLowerCase()
          .includes(filedSearchName.toLowerCase());
      return cartItem;
    });

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
              <Input
                size="large"
                placeholder="Search Booking By Waybill"
                onChange={this.handleChangeSearchUser}
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
              dataSource={dataFilterStatus}
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
  getBookingStart: () => dispatch(getBookingStart()),
  updateCompleteStart: (key) => dispatch(updateCompleteStart(key)),
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
