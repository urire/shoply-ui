import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const addToCart = (items, product) => dispatch => {
	const cart = items.slice();

	let alreadyExists = false;

	cart.forEach(item => {
		if (item._id === product._id) {
			alreadyExists = true;
			++item.count;
		}
	});

	if (!alreadyExists) {
		cart.push({ ...product, count: 1 });
	}

	dispatch({
		type: ADD_TO_CART,
		payload: { cart }
	});

	localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (items, product) => dispatch => {
	const cart = items.slice().filter(item => item._id !== product._id);

	dispatch({
		type: REMOVE_FROM_CART,
		payload: { cart }
	});

	localStorage.setItem("cart", JSON.stringify(cart));
};
