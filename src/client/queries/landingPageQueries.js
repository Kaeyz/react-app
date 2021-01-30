import { client } from '../client';

const landingPageQueries = {};

landingPageQueries.contactUs = ({firstName, lastName, companyName, email, phone, message}) => {
	const query = `
	mutation CONTACT_US($firstName: String, $lastName: String, $companyName: String, $email: String, $phone: String, $message: String) {
		ContactUs(firstName: $firstName, lastName: $lastName, companyName: $companyName, email: $email, phone: $phone, message: $message){
			message
		}
	}
	`;
	const variables = { firstName, lastName, companyName, email, phone, message };

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};




export default Object.freeze(landingPageQueries);
