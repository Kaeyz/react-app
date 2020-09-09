import {
	client
} from '../client';

const employeeQueries = {};

employeeQueries.addNewEmployee = (input) => {
	const query = `
	mutation ADD_NEW_EMPLOYEE($input: [addEmployeeInput]) {
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

employeeQueries.getActiveEmployees = () => {
	const query = `
	query FETCH_EMPLOYEES_OF_COMPANY ($by: FetchEmployeesOfACompanyEnum) {
		fetchEmployeesOfACompanyByCategory (by: $by) {
			_id
			email
			name
			department
			branch
			createdAt
			adminVerified
			suspended
		}
	}
	`;

	const variables = { by: 'ACTIVE' };

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

employeeQueries.getPendingEmployees = () => {
	const query = `
	query FETCH_EMPLOYEES_OF_COMPANY ($by: FetchEmployeesOfACompanyEnum) {
		fetchEmployeesOfACompanyByCategory (by: $by) {
				_id
				email
				name
				department
				branch
				createdAt
				adminVerified
				suspended
		}
	}
	`;

	const variables = { by: 'PENDING' };

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

employeeQueries.getSuspendedEmployees = () => {
	const query = `
	query FETCH_EMPLOYEES_OF_COMPANY ($by: FetchEmployeesOfACompanyEnum) {
		fetchEmployeesOfACompanyByCategory (by: $by) {
				_id
				email
				name
				department
				branch
				createdAt
				adminVerified
				suspended
		}
	}
	`;

	const variables = { by: 'SUSPENDED' };

	return new Promise((resolve, reject) => {
		client(query, variables)
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

employeeQueries.suspendEmployee = (id) => {
	const query = `
	mutation SUSPEND_EMPLOYEE_BY_ID($id: String!) {
		suspendEmployee(id: $id) {
				message
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

employeeQueries.unSuspendEmployee = (id) => {
	const query = `
	mutation UNSUSPEND_EMPLOYEE_BY_ID($id: String!) {
		unSuspendEmployee(id: $id) {
				message
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