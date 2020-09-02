import React , {lazy,Suspense} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import Spinner from '../components/spinner/spinner.component';
import ErrorBoundary from '../components/error-boundary/error-boundary.component';
import {Layout } from 'antd';
import PublicRoute from './public.routes'
const HomePage = lazy(() => import('../pages/home-page/home-page.component'));
const ShopPage = lazy(() => import('../pages/shop/shop.component'));
const CheckOutPage = lazy(() => import('../pages/checkout-page/checkout-page.component'));
const SignInSignUpPage = lazy(() => import('../pages/sign-in-sign-up/sign-in-sign-up.component'));
const UserPage = lazy(() => import('../pages/user-page/user-page.component'));





const Routes = ({currentUser}) => (
    <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Layout>
              <PublicRoute exact path="/" component={HomePage} />
              <PublicRoute path="/shop" component={ShopPage} />
            </Layout>
                <PublicRoute exact path="/checkout" component={CheckOutPage} />
            <Route
              exact
              path="/signInSignUp"
              render={() => (!currentUser ? <SignInSignUpPage /> : <Redirect to="/checkout" />)}
            />
            <Route
              path="/user"
              render={() => (currentUser ? <UserPage /> : <Redirect to="/signInSignUp" />)}
            />
            {/* <Route component={Page404} /> */}
          </Suspense>

        </ErrorBoundary>

      </Switch>
)

export default Routes;