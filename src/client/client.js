import { createApolloFetch } from 'apollo-fetch';
import { logoutUser } from '../store/actions/userActions';
import store from '../store/store';
import keys from '../utils/keys';



export const client = async (query, variables) => {
	const token =  localStorage.getItem('auth');
	const apolloFetch = createApolloFetch({ uri: keys.server });

	apolloFetch.useAfter(({ response }, next) => {
		// check if token has not expired
		if (response.status === 401) {
			store.dispatch(logoutUser());
			return;
		}
		next();
	});

/* eslint-disable */
	if (token) {
		// eslint-disable-next-line no-unused-vars
		apolloFetch.use(({ request, options }, next) => {
			options.headers = { Authorization: token };
			next();
		});
	}
	return new Promise((resolve, reject) => {
		apolloFetch({ query, variables })
			.then(response => {
				return resolve(response);
			})
			.catch(error => {
				return reject(error);
			});
	});
};

export const httpFetch = {};

/**
 *	makes a post request using fetch
 * @param {string} path
 * @param {JSON} body
 */
httpFetch.post = (path, body) => {
	const myHeaders = new Headers();

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body,
		redirect: 'follow'
	};


	return new Promise((resolve, reject) => {
		fetch(path, requestOptions)
			.then(result => resolve(result))
			.catch(error => reject('error', error));
	});
};

/**
 *	makes a get request using fetch
 * @param {string} path
 */
httpFetch.get = (path) => {
	const myHeaders = new Headers();

	const requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};


	return new Promise((resolve, reject) => {
		fetch(path, requestOptions)
			.then(res => res.text())
			.then(result => resolve(JSON.parse(result)))
			.catch(error => reject('error', error));
	});
};
