import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Spinner, ErrorBoundary } from '../components/index';

import PublicRoute from './public.routes';
import PrivateRoutes from './private.routes';
import {
  HomePage,
  ShopPage,
  CheckOutPage,
  SignInSignUpPage,
  UserPage,
  Page404,
} from '../pages/index';
import {
  ForgotPassWordContainer,
  ResetPassWordContainer,
} from '../containers/index';

const Routes = ({ currentUser }) => (
  <ErrorBoundary>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <PublicRoute exact path="/" component={HomePage} />
        <PublicRoute path="/shop" component={ShopPage} />
        <PublicRoute exact path="/checkout" component={CheckOutPage} />
        <PublicRoute
          exact
          path="/forgotPassword"
          component={ForgotPassWordContainer}
        />
        <PublicRoute
          exact
          path="/resetPassword"
          render={(props) =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <ResetPassWordContainer {...props} />
            )
          }
        />
        <PublicRoute
          exact
          path="/signInSignUp"
          render={(props) =>
            !currentUser ? (
              <SignInSignUpPage {...props} />
            ) : (
              <Redirect to="/checkout" />
            )
          }
        />

        <PrivateRoutes path="/user" component={UserPage} />
        <Route path="*" component={Page404} />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default Routes;
