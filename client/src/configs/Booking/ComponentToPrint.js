import React from 'react';
import { Result } from 'antd';

class ComponentToPrint extends React.Component {
  render() {
    const { userInfo } = this.props;

    return (
      <Result
        status="success"
        title={`Successfully Purchased  ${userInfo.name.toUpperCase()} Card`}
        subTitle={
          <div className="subtitle-container">
            <h3>
              Name Customer: <span>{userInfo.name}</span>{' '}
            </h3>
            <h3>
              Card Number:{' '}
              <span>
                XXXX{' '}
                {userInfo.creditCard.slice(5, userInfo.creditCard.length - 12)}{' '}
                XXXX
              </span>
            </h3>
            <h3>
              Total Money: <span>{userInfo.totalMoney}$</span>
            </h3>
          </div>
        }
      />
    );
  }
}
export default ComponentToPrint;
