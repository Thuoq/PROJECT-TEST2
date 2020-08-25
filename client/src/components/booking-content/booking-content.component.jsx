import React from 'react';
import {connect} from 'react-redux';
import { Layout, Table,Skeleton,Popconfirm,message,Button } from 'antd';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { getBookingStart, updateCompleteStart } from '../../redux/booking/booking-action';
import { selectHistoryBooking, selectIsLoadingBOOKING } from '../../redux/booking/booking-selector';

const { Content } = Layout;



class BookingContent extends React.Component {
  state = {
    columnsPrefix : [
      {
        title: 'Date',
        dataIndex: 'createAt',
        sorter: (a, b) => a.date - b.date,
        width: 100,
        fixed: 'left',
        render(_, row) {
          return {
            children: row.createAt,
            props: {
              rowSpan: row.rowSpan,
            }
          }
        }
      },
      {
        title: 'Name',
        dataIndex: 'name',
        width: 150,
        fixed: 'left'
      },
      {
        title: 'Phone Customer',
        dataIndex: 'phoneNumber',
        ellipsis: true,
        width: 150,
        
      },
      {
        title: 'Address Ship',
        dataIndex: 'address',
        ellipsis: true,
        width: 150,
      },
      {
        title: 'BOX_NO',
        dataIndex: 'boxNo',
        width: 150,
        render: () => (
          <p>BOX NO</p>
        )
      },
      {
        title: 'PACKAGE_QTY',
        dataIndex: 'quantity',
        ellipsis: true,
        width: 150,
      },
      {
        title: 'ORDER_ITEM',
        dataIndex: 'idProduct',
        ellipsis: true,
        width: 150,
      },
      {
        title: 'ITEM_DESCRIPTION_EN',
        dataIndex: 'nameEN',
        ellipsis: true,
        width: 200,
      },
      {
        title: 'ITEM_DESCRIPTION',
        dataIndex: 'nameVN',
        ellipsis: true,
        width: 600  ,
      },
      {
        title: 'ORDER_QUANTITY',
        dataIndex: 'quantity',
        ellipsis: true,
        width: 150,
      },
      {
        title: 'UOM',
        dataIndex: 'uom',
        width: 150,
      },
      {
        title: 'ORDER_NET_WEIGHT',
        dataIndex: 'weight',
        ellipsis: true,
        width: 250,
      },
      {
        title: 'ORDER_GROSS_WEIGHT',
        dataIndex: 'totalWeight',
        ellipsis: true,
        width: 250,
      },
      {
        title: 'ITEM_FACTORY_COUNTRY',
        dataIndex: 'origin',
        ellipsis: true,
        width: 250,
      },
      {
        title: 'AMOUNT',
        dataIndex: 'priceUSD',
        width: 150,
      },
      {
        title: 'Total',
        dataIndex: 'totalMoney',
        width: 150,
      },
      {
        title: 'ORDER_CURR_CODE',
        dataIndex: 'orderCurrCode',
        ellipsis: true,
        width: 200,
      },
      {
        title: 'SHIP_FROM_PORT',
        dataIndex: 'shipFormPort',
        ellipsis: true,
        width: 200,
      },
      {
        title: "isComplete",
        dataIndex: "isComplete",
        key: "delete",
        ellipsis: true,
        width: 150,
        fixed: 'right',
        render: (text,record) => {
          if(record.isCompleted) {
           return <h2>Done</h2>
          }else {
            return(
              <Popconfirm
              title="Are you sure Is Complete ?"
              okText="Yes"
              cancelText="No"
              onCancel  = { () => message.error('U click on No')}
              onConfirm = {() => this.handleComplete({key:record.key,id:record._id})}
            >
                <Button type="primary">Complete</Button>
              </Popconfirm>
            )}
          }
      }
    ]
  }
  createNewArr = (data) =>{
    return data.reduce((result, item) => {
    //First, take the name field as a new array result
        if (result.indexOf(item.createAt) < 0) {
            result.push(item.createAt)
        }
        return result
    }, []).reduce((result, name) => {
    //Take the data with the same name as a new array, and add a new field * * rowSpan inside it**
      const children = data.filter(item => item.createAt === name);
     
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
    const {historyBooking,isLoading} = this.props;
    if(!isLoading)  {
      return (
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{
            padding: 24,
            margin: 0,
            minHeight: 600,
          }}
          >
            <div>
              <Table
                pagination={false}
                tableLayout="fixed"
                rowSelection={{
                  type:'radio',
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
            </div>
          </Content>
        </Layout>
      )
    }
    else {
      return (
        <Skeleton paragraph={{ rows: 6 }}/>
      )
    }
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
export default connect( mapStateToProps,mapDispatchToProps)(BookingContent);




