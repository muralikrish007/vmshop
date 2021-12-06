import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productDetailsReducer, productListReducer  } from './reducer/productReducer';
import { cartReducer } from './reducer/cartReducers';

import { userSigninReducer } from './reducer/userReducer';
import { userRegisterReducer} from './reducer/userReducer';

const cartItems  =Cookie.getJSON("cartItems") || [];
const userInfo =Cookie.getJSON("userInfo")  || null;
const initialiState={cart: {cartItems} , userSignin:{userInfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer
});
const composeEnhancer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialiState ,composeEnhancer(applyMiddleware(thunk)));
export default store;