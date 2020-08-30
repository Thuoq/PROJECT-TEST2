import React , {lazy , Suspense }from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Layout } from 'antd';
import { selectCurrentUser } from './redux/user/user.selector';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import Navigation from './components/navigation/navigation.component';


const HomePage = lazy(() => import('./pages/home-page/home-page.component'));
const SignInSignUpPage = lazy(() => import('./pages/sign-in-sign-up/sign-in-sign-up.component'));
const UserPage = lazy(() => import('./pages/user-page/user-page.component'));
const CheckoutPage = lazy(() => import('./pages/checkout-page/checkout-page.component'))


const App = ({currentUser}) => ( 
  <div className="App">
        <Layout>
          <Navigation />
          <Switch>
            <ErrorBoundary>
              <Suspense fallback={<Spinner/>}>
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
              </Suspense>
            </ErrorBoundary>
          </Switch>
          
        </Layout> 
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
