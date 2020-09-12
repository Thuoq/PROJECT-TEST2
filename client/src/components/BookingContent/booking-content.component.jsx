import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './booking-content.styles.scss';
import { Layout, Table,Spin } from 'antd';
//import {Popconfirm , Button , message,Tag} from 'antd'
import Prefjx from '../../configs/booking-content.config';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { getBookingStart, updateCompleteStart } from '../../redux/booking/booking-action';
import { selectHistoryBooking, selectIsLoadingBOOKING } from '../../redux/booking/booking-selector';
import ExportCSV from '../exportCSV/exportcsv.component';

const { Content } = Layout;



class BookingContent extends React.Component {
  state = {
    columnsPrefix :  Prefjx
  }
  createNewArr = (data) =>{
    return data.reduce((result, item) => {
    //First, take the name field as a new array result
        if (result.indexOf(item.createAt) < 0   ) {
            result.push(item.createAt)

        }
        return result
    }, []).reduce((result, name) => {
    //Take the data with the same name as a new array, and add a new field * * rowSpan inside it**
      const children = data.filter(item => item.createAt === name );
     
      result = result.concat(
        children.map((item, index) => ({
          ...item,
          rowSpan: index === 0 ? children.length : 0,//Add the first row of data to the rowSpan field
        }))
      )
      return result;
    }, [])
  }
  handleComplete = key => {
    const {updateCompleteStart} = this.props;
    updateCompleteStart(key)
  }
  componentDidMount() {
    const {currentUser,getBookingStart} = this.props;
    const {columnsPrefix} = this.state;
    if(!currentUser.roles.includes("admin")) {
      let newState = columnsPrefix.filter(el => el.title !== 'isComplete');
      this.setState({
        columnsPrefix : newState
      }) 
    }
    getBookingStart();  
  }


  render() {
    const {columnsPrefix} = this.state;
    const {historyBooking,isLoading,currentUser} = this.props; 

      return (
          <Layout style={{ padding: '0 2.4rem 2.4rem' }}>
            <Content style={{
              padding: 24,
              margin: 0,
              minHeight: 600,
            }}
            >
              {currentUser.roles.includes("admin") ? <ExportCSV  csvData ={historyBooking} fileName="booking-data"/> : null}
              <div>
                <Spin spinning ={isLoading} size="large">
                  <Table
                    rowClassName ={(record, index) => record.isCompleted ?  "background-silver" : null}
                    bordered
                    tableLayout="fixed"
                    rowSelection={{
                      type: 'radio',
                      getCheckboxProps: record => ({
                        disabled: record.isCompleted === true,
                        // Column configuration not to be checked
                        name: record.name,
                      }),
                    }}
                    
                    scroll={{ x: 2000 }}
                    title={() => 'Booking Pages'}
                    dataSource={this.createNewArr(historyBooking)}
                    columns={columnsPrefix}
                    rowKey='key'
                  /> 
                </Spin>
              </div>
            </Content>
          </Layout>
      )
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  historyBooking : selectHistoryBooking,
  isLoading : selectIsLoadingBOOKING
})

const mapDispatchToProps = dispatch => ({
  getBookingStart: () => dispatch(getBookingStart()),
  updateCompleteStart: (key)=> dispatch(updateCompleteStart(key))
})

/* TYPES */ 
BookingContent.propTypes = {
  historyBooking: PropTypes.array.isRequired,
  currentUser: PropTypes.shape({
    roles: PropTypes.oneOf(['user','admin'])
  }),
  isLoading : PropTypes.bool.isRequired,
  getBookingStart: PropTypes.func.isRequired,
  updateCompleteStart: PropTypes.func.isRequired
}
export default connect( mapStateToProps,mapDispatchToProps)(BookingContent);




