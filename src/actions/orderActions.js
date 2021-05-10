import http from "../services/httpService";
import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER, FETCH_ORDERS, FETCH_USER_ORDERS } from "../types";

export const createOrder = order => dispatch => {
	http.post("/orders", order).then(res => {
		dispatch({
			type: CREATE_ORDER,
			payload: res.data
		});

		localStorage.clear("cart");
		dispatch({ type: CLEAR_CART });
	});
};

export const clearOrder = () => dispatch => {
	dispatch({ type: CLEAR_ORDER });
};

export const fetchOrders = token => dispatch => {
	http.setJwt(token);
	http.get("/orders").then(res => {
		dispatch({ type: FETCH_ORDERS, payload: res.data });
	});
};

export const fetchUserOrders = token => dispatch => {
	http.setJwt(token);
	http.get("/orders/me").then(res => {
		dispatch({ type: FETCH_USER_ORDERS, payload: res.data });
	});
};
