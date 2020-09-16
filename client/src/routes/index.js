import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import PublicRoute from './public.routes';
import PrivateRoutes from './private.routes';

const HomePage = lazy(() => import('../pages/Home/Home'));
const ShopPage = lazy(() => import('../pages/Shop/Shop'));
const CheckOutPage = lazy(() => import('../pages/Checkout/Checkout'));
const SignInSignUpPage = lazy(() =>
  import('../pages/SignInSignUp/SignInSignUp')
);
const UserPage = lazy(() => import('../pages/User/User'));
const Page404 = lazy(() => import('../pages/404/404'));

const Routes = ({ currentUser }) => (
  <ErrorBoundary>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <PublicRoute exact path="/" component={HomePage} />
        <PublicRoute path="/shop" component={ShopPage} />
        <PublicRoute exact path="/checkout" component={CheckOutPage} />
        <PublicRoute
          exact
          path="/signInSignUp"
          // component={SignInSignUpPage}
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
