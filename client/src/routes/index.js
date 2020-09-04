import React , {lazy,Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Spinner from '../components/spinner/spinner.component';
import ErrorBoundary from '../components/error-boundary/error-boundary.component';
import PublicRoute from './public.routes'
import PrivateRoutes from './private.routes'
const HomePage = lazy(() => import('../pages/home-page/home-page.component'));
const ShopPage = lazy(() => import('../pages/shop/shop.component'));
const CheckOutPage = lazy(() => import('../pages/checkout-page/checkout-page.component'));
const SignInSignUpPage = lazy(() => import('../pages/sign-in-sign-up/sign-in-sign-up.component'));
const UserPage = lazy(() => import('../pages/user-page/user-page.component'));
const Page404 = lazy(() => import('../pages/404/404.component'));


const Routes = ({currentUser}) => {

  return(
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
          <Switch>
             
                <PublicRoute exact path = "/" component={HomePage} />
                <PublicRoute path = "/shop" component={ShopPage} />
                <PublicRoute exact path = "/checkout" component={CheckOutPage} />
              
                <Route
                  exact
                  path = "/signInSignUp"
                  render= { () => !currentUser ? <SignInSignUpPage/> : <Redirect to="/checkout" />} 
                />
                <PrivateRoutes
                  path = "/user"
                  component = {UserPage}
                />  
                <Route path="*"  component = {Page404} />
              
            </Switch>
          </Suspense>

        </ErrorBoundary>
         
      
)}

export default Routes;