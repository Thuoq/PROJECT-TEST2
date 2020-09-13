import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { routerReducer } from 'react-router-redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import checkOutReducer from './check-out/check-out.reducer';
import shopReducer from './shop/shop.reducer';
import bookingReducer from './booking/booking-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'user'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  checkout: checkOutReducer,
  booking: bookingReducer,
  routing: routerReducer,
});

export default persistReducer(persistConfig, rootReducer);
