import { CREATE_ORDER, CLEAR_ORDER, FETCH_ORDERS, FETCH_USER_ORDERS } from "../types";

export const orderReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_ORDER:
			return {
				order: action.payload
			};
		case CLEAR_ORDER:
			return {
				order: null
			};
		case FETCH_ORDERS:
			return {
				orders: action.payload
			};
		case FETCH_USER_ORDERS:
			return {
				userOrders: action.payload
			};
		default:
			return state;
	}
};
