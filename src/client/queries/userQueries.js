import { client } from '../client';

const userQueries = {};

userQueries.signUp = (userData) => {
	const query =`
	mutation INDIVIDUAL_SIGNUP_MUTATION ($input: signUpEmployeeInput) {
		signup(input: $input ){
			name
			email
			type
			gender
		}
	}
	`;
	const variables = {
		input: userData
	};
	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

userQueries.registerCompany = (input) => {

	const query = `
	mutation REGISTER_COMPANY_MUTATION($input: signUpCompanyInput!){
		registerCompany(input: $input){
			message
		}
	}
	`;
	const variables = {
		input
	};
	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

userQueries.login = (inputs) => {
	const query = `
	mutation LOGIN_MUTATION ($email: String!, $password: String!){
		login(email: $email, password: $password){
			token
		}
	}
	`;
	const variables = {
		email: inputs.email,
		password: inputs.password,
	};
	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};


userQueries.forgotPassword = (email) => {
	const query = `
	mutation REQUEST_RESET_PASSWORD($email: String!){
		requestResetPassword(email: $email){
			message
		}
	}
	`;
	const variables = { email };
	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

userQueries.resetPassword = (data) => {
	const query = `
	mutation RESET_PASSWORD ($resetToken: String!, $password: String, $confirmPassword: String){
		resetPassword(resetToken: $resetToken, password: $password, confirmPassword: $confirmPassword){
			email
			token
		}
	}
	`;
	const variables = { ...data };
	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

userQueries.getCurrentUser = () => {
	const query = `
	query ME {
		me{
			name
			email
			mobile
			type
			image
			gender
			nationality
			dob
			weight
			height
			activity
			address
			adminVerified
			source
			suspended
			company
			companyUrl
		}
	}
	`;
	return new Promise((resolve, reject) => {
		client(query)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

userQueries.updateUser = (input) => {
	const query = `
	mutation UPDATE_USER ($input: updateUserInput) {
		updateUser(input: $input){
			name
			email
			mobile
			type
			image
			gender
			nationality
			dob
			weight
			height
			activity
			address
			adminVerified
			source
			suspended
			company
			companyUrl
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

userQueries.updateUserPassword = (input) => {
	const query = `
	mutation UPDATE_USER_PASSWORD ($input: updateUserPasswordInput){
		updateUserPassword(input: $input){
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
}

export default Object.freeze(userQueries);