import { createApolloFetch } from 'apollo-fetch';
import keys from '../utils/keys';


export const client = async (query, variables) => {
	const token =  localStorage.getItem('auth');
	const apolloFetch = createApolloFetch({ uri: keys.server });


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
	const formdata = new FormData();
	formdata.append('json', body);

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};

	return new Promise((resolve, reject) => {
		fetch(path, requestOptions)
			.then(response => response.text())
			.then(result => resolve(result))
			.catch(error => reject('error', error));
	});
};

