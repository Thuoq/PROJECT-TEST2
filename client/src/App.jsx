import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Layout } from 'antd';
import { selectCurrentUser } from './redux/user/user.selector';

import HomePage from './pages/home-page/home-page.component';
import Navigation from './components/navigation/navigation.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import UserPage from './pages/user-page/user-page.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component';

const App = ({currentUser}) => ( 
  <div className="App">
        <Layout>
          <Navigation />

          <Switch>
            
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact 
                path="/signInSignUp" 
                render={() => 
                (!currentUser ? <SignInSignUpPage /> : <Redirect to="/checkout" />) } />
            <Route
              path="/user"
              render={() => (currentUser ? <UserPage /> : <Redirect to="/signInSignUp" />)}
            />
            <Route path="/" component={HomePage} />
          </Switch>
          
        </Layout> 
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
