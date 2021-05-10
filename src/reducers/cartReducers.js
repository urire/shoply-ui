import { ADD_TO_CART, REMOVE_FROM_CART, SHOW_CART } from "../types";

export const cartReducer = (
	state = { cart: JSON.parse(localStorage.getItem("cart") || "[]"), shown: false },
	action
) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				cart: action.payload.cart
			};
		case REMOVE_FROM_CART:
			return {
				...state,
				cart: action.payload.cart
			};
		case SHOW_CART:
			return {
				...state,
				shown: action.payload.shown
			};
		default:
			return state;
	}
};
