import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {
  Layout, Modal, Tabs,
} from 'antd';
import windowSize from 'react-window-size';

import { ReactComponent as LoginIcon } from '../../assets/001-login.svg';
import { ReactComponent as Register } from '../../assets/002-escalator.svg';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-sign-up.styles.scss';

const { Content } = Layout;
const { TabPane } = Tabs;

class SignInSignUpPage extends React.Component {
  render() {
    const {windowWidth,history} = this.props;
    return(
      <>
    
        <Content
          className="containerSignInSignUp"
        >
          <Modal
            visible
            onCancel= {() => history.push("/shop")}
            footer={null}
          > 
  
           
            <Tabs
              defaultActiveKey="1"
              size={windowWidth <= 900 ? 'small' : 'large'}
              centered="true"
              tabBarGutter={50}
            >
              <TabPane
                tab={(
                  <span style={{ display: 'flex', justifyContent: 'center' }}>
                    <LoginIcon style={{ width: '25px', height: '25px' }} />
                    &nbsp;

                    Log In
                  </span>
                )}
                key="1"
              >
                <SignIn />
              </TabPane>
              <TabPane
                tab={(
                  <span style={{ display: 'flex', justifyContent: 'center' }}>
                    <Register style={{ width: '25px', height: '25px' }} />
                    &nbsp;

                    Sign Up
                  </span>
                )}
                key="2"
              >
                <SignUp />
              </TabPane>
            </Tabs>
          </Modal>
          
        </Content>

      </>
    )
  }
}

SignInSignUpPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
}
export default withRouter(windowSize(SignInSignUpPage));
