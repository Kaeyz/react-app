import {
	client
} from '../client';

const employeeQueries = {};

employeeQueries.addNewEmployee = (input) => {
	const query = `
	mutation ADD_NEW_EMPLOYEE($input: addEmployeeInput) {
		addEmployeeToACompany(input: $input) {
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

employeeQueries.getEmployees = () => {
	const query = `
	query FETCH_EMPLOYEES_OF_COMPANY {
		fetchEmployeeOfACompany {
				_id
				name
				email
				branch
				createdAt
		}
	}
	`;

	return new Promise((resolve, reject) => {
		client(query)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

employeeQueries.getEmployeeById = (id) => {
	const query = `
	query FETCH_EMPLOYEE_BY_ID($id: String) {
		userById(id: $id) {
				_id
				email
				name
				department
				branch
				createdAt
		}
	}
	`;

	const variables = {
		id
	};
	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};





export default Object.freeze(employeeQueries);