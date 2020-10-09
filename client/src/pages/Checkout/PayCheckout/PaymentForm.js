import React from 'react';
import Card from 'react-credit-cards';
import { Row, Col, Spin } from 'antd';
import 'react-credit-cards/lib/styles.scss';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from '../../../helpers/payment';
import './PaymentForm.scss';
import { createStructuredSelector } from 'reselect';
import { selectIsFetchingCheckOut } from '../../../redux/check-out/check-out.selector';
import { checkOutStart } from '../../../redux/check-out/check-out.action';
import { connect } from 'react-redux';
class PaymentForm extends React.Component {
  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null,
    addressShipping: '',
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { checkOutStart } = this.props;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    checkOutStart({
      address: formData.addressShipping,
      cardNumber: formData.number,
    });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer } = this.state;
    const { isFetchingCheckOut } = this.props;
    return (
      <Spin spinning={isFetchingCheckOut}>
        <div key="Payment">
          <div className="App-payment">
            <Card
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focused}
              callback={this.handleCallback}
            />
            <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="tel"
                  style={{ marginTop: '3rem' }}
                  name="number"
                  className="form-control"
                  placeholder="Card Number"
                  pattern="[\d| ]{16,22}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <input
                type="text"
                name="addressShipping"
                className="form-control"
                placeholder="Shipping Address "
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <input
                    type="tel"
                    name="expiry"
                    className="form-control"
                    placeholder="Valid Thru"
                    pattern="\d\d/\d\d"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </Col>
                <Col span={12}>
                  <input
                    type="tel"
                    name="cvc"
                    className="form-control"
                    placeholder="CVV"
                    pattern="\d{3,4}"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </Col>
              </Row>

              <input type="hidden" name="issuer" value={issuer} />
              <button
                className="ant-btn ant-btn-primary"
                style={{
                  width: '100%',
                }}
                type="submit"
              >
                Pay By Card{' '}
              </button>
            </form>
          </div>
        </div>
      </Spin>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  isFetchingCheckOut: selectIsFetchingCheckOut,
});

const mapDispatchToProps = (dispatch) => ({
  checkOutStart: (addressAndCardNumber) =>
    dispatch(checkOutStart(addressAndCardNumber)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);
