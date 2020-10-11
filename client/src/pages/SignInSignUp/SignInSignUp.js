import React from 'react';

import { Layout, Col, Row } from 'antd';
import { SignUp, SignIn } from '../../components/index';
import './SignInSignUp.scss';

const { Content } = Layout;

class SignInSignUpPage extends React.Component {
  render() {
    return (
      <Content className="containerSignInSignUp">
        <Row gutter={[56, 16]}>
          <Col span={12}>
            <SignIn />
          </Col>
          <Col span={12}>
            <SignUp />
          </Col>
        </Row>
      </Content>
    );
  }
}

export default SignInSignUpPage;
