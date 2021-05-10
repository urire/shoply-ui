import _ from "lodash";
import http from "../services/httpService";
import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, SORT_PRODUCTS_BY_PRICE } from "../types";

export const fetchProducts = () => dispatch => {
	http.get("/products").then(res => {
		dispatch({
			type: FETCH_PRODUCTS,
			payload: res.data
		});
	});
};

export const filterProducts = (products, size) => dispatch => {
	dispatch({
		type: FILTER_PRODUCTS_BY_SIZE,
		payload: {
			size,
			items: size === "" ? products : products.filter(product => product.availableSizes.indexOf(size) >= 0)
		}
	});
};

export const sortProducts = (filteredProducts, sort) => dispatch => {
	let order = "asc";
	let path = "_id";

	if (sort === "lowest") {
		path = "price";
	} else if (sort === "highest") {
		order = "desc";
		path = "price";
	}

	const sortedProducts = _.orderBy(filteredProducts.slice(), path, order);

	dispatch({
		type: SORT_PRODUCTS_BY_PRICE,
		payload: {
			sort,
			items: sortedProducts
		}
	});
};
