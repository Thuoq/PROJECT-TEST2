import { lazy } from 'react';

export const HomePage = lazy(() => import('./Home/Home'));
export const ShopPage = lazy(() => import('./Shop/Shop'));
export const CheckOutPage = lazy(() => import('./Checkout/Checkout'));
export const SignInSignUpPage = lazy(() =>
  import('../pages/SignInSignUp/SignInSignUp')
);
export const UserPage = lazy(() => import('./User/User'));
export const Page404 = lazy(() => import('./404/404'));
