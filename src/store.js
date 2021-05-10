import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { productReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { orderReducer } from "./reducers/orderReducers";
import { userReducer } from "./reducers/userReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	combineReducers({
		products: productReducer,
		cart: cartReducer,
		order: orderReducer,
		user: userReducer
	}),
	initialState,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;
