import { client } from '../client';

const companyQueries = {};

companyQueries.getCompanies = () => {
	const query =`
	query FETCH_COMPANIES($type: UserEnum) {
		usersByType(type: $type)
			{
				_id
				name
				email
				createdAt
				companyName
		}
	}
	`;

	const variables = { type: 'COMPANY' };

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

companyQueries.getCompanyById = (id) => {
	const query =`
	query FETCH_COMPANY_BY_ID($id: String) {
		userById(id: $id) {
				_id
				companyName
				email
				companyUrl
				companySize
				employeeLimit
				address
				name
				representativeEmail
				department
				createdAt
				adminVerified
				suspended
				activationToken
		}
	}
	`;

	const variables = { id };

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

companyQueries.activateCompany = (activationToken) => {
	const query =`
	mutation ACTIVATE_COMPANY($activationToken: String!) {
		activateCompany(activationToken: $activationToken) {
				message
		}
	}
	`;

	const variables = { activationToken };

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

companyQueries.suspendCompany = (id) => {
	const query =`
	mutation SUSPEND_COMPANY($id: String!) {
		suspendCompany(id: $id) {
				message
		}
	}
	`;

	const variables = { id };

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

companyQueries.reactivateCompany = (id) => {
	const query =`
	mutation reactivate_COMPANY($id: String!) {
		unSuspendCompany(id: $id) {
				message
		}
	}
	`;
	const variables = { id };

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

companyQueries.setEmployeeLimit = (amount, id) => {
	const query =`
	mutation SET_EMPLOYEE_LIMIT($id: String!, $amount: Int!) {
		setEmployeeLimit(id: $id, amount: $amount) {
				message
		}
	}
	`;

	const variables = { id, amount };

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};


export default Object.freeze(companyQueries);