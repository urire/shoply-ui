import http from "../services/httpService";
import { LOGIN, LOGOUT, REGISTER } from "../types";

const initUser = (res, dispatch, type) => {
	const user = { token: res.data.token, ...res.data.user };

	dispatch({
		type,
		payload: { user }
	});

	localStorage.setItem("user", JSON.stringify(user));
};

export const login = (email, password) => dispatch => {
	http
		.post("/users/login", { email, password })
		.then(res => initUser(res, dispatch, LOGIN))
		.catch(err => alert("invalid email or password"));
};

export const logout = () => dispatch => {
	dispatch({
		type: LOGOUT
	});

	localStorage.setItem("user", null);
};

export const register = (name, email, password) => dispatch => {
	http
		.post("/users/register", { name, email, password })
		.then(res => initUser(res, dispatch, REGISTER))
		.catch(err => alert("invalid name, email or password"));
};
