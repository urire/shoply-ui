import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

axios.defaults.baseURL = "https://shoply-server.herokuapp.com/api";

axios.interceptors.response.use(null, error => {
	const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

	if (!expectedError) {
		logger.log("Logging the error: ", error);
		toast.error("An unexpected error occurred");
	}

	return Promise.reject(error);
});

function setJwt(jwt) {
	axios.defaults.headers.common["Authorization"] = jwt;
}

const output = {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
	setJwt
};

export default output;
