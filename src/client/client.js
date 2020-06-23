import { createApolloFetch } from 'apollo-fetch';
import keys from '../utils/keys';


const client = (query, variables) => {
	const token = localStorage.getItem('auth');
	const apolloFetch = createApolloFetch({ uri: keys.server });

	if (token) {
		// eslint-disable-next-line no-unused-vars
		apolloFetch.use(({ request, options }, next) => {
			options.headers['authorization'] = token;
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

export default client;