import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Layout, Col, Row, Spin } from 'antd';
import { SignUp, SignIn } from '../../components/index';
import './SignInSignUp.scss';
import { createStructuredSelector } from 'reselect';
import { selectIsLoadingUser } from '../../redux/user/user.selector';

const { Content } = Layout;

class SignInSignUpPage extends React.Component {
  render() {
    const { isLoading } = this.props;
    // const {windowWidth,history} = this.props;
    return (
      <Content className="containerSignInSignUp">
        <Spin spinning={isLoading} size="large">
          <Row gutter={[56, 16]}>
            <Col span={12}>
              <SignIn />
            </Col>
            <Col span={12}>
              <SignUp />
            </Col>
          </Row>
        </Spin>
      </Content>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoadingUser,
});

SignInSignUpPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
export default withRouter(connect(mapStateToProps)(SignInSignUpPage));
