import { client } from '../client';

const subscriptionQueries = {};

subscriptionQueries.subscribeToEmailList = (input) => {
	const query = `
	mutation SUBSCRIBE_TO_EMAIL_LIST ($input: EmailSubscriberInput){
		subscribeToEmailList(input: $input){
			message
		}
	}
	`;

	const variables = { input };
	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

export default Object.freeze(subscriptionQueries);