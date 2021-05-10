import { LOGIN, LOGOUT, REGISTER } from "../types";

export const userReducer = (
	state = {
		user: JSON.parse(localStorage.getItem("user") || null)
	},
	action
) => {
	switch (action.type) {
		case LOGIN:
			return {
				user: action.payload.user
			};
		case LOGOUT:
			return {
				user: null
			};
		case REGISTER:
			return {
				user: action.payload.user
			};
		default:
			return state;
	}
};
