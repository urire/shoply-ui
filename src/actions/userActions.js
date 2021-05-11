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

export const login = (email, password) => async dispatch => {
	const res = await http.post("/users/login", { email, password });

	initUser(res, dispatch, LOGIN);
};

export const logout = () => dispatch => {
	dispatch({
		type: LOGOUT
	});

	localStorage.setItem("user", null);
};

export const register = (name, email, password) => async dispatch => {
	const res = await http.post("/users/register", { name, email, password });

	initUser(res, dispatch, REGISTER);
};
