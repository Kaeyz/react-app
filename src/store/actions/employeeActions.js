import employeeQueries from '../../client/queries/employeeQueries';
import {
	ADD_EMPLOYEE, ADD_EMPLOYEES,

	EMPLOYEE_IS_LOADING,
	EMPLOYEE_NOT_LOADING
} from '../types';
import { errorAlert, successAlert } from './alertActions';


const addEmployees = (employees) => {
	return { type: ADD_EMPLOYEES, payload: employees };
};

const addEmployee = (employee) => {
	return { type: ADD_EMPLOYEE, payload: employee };
};

const employeeIsLoading = () => {
	return { type: EMPLOYEE_IS_LOADING };
};

const employeeNotLoading = () => {
	return { type: EMPLOYEE_NOT_LOADING };
};


export const addNewEmployee = (input) => dispatch => {
	dispatch(employeeIsLoading());
	employeeQueries.addNewEmployee(input)
		.then(res => {
			if (res.data) {
				const message = res.data.addEmployeeToACompany.message;
				dispatch(successAlert(message));
				dispatch(employeeNotLoading());
			}
			if (res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
				dispatch(employeeNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(employeeNotLoading());
		});
};

/**
 * Gets registered employees
 */
export const getActiveEmployees = () => dispatch => {
	dispatch(employeeIsLoading());
	employeeQueries.getActiveEmployees()
		.then(res => {
			const employees = res.data.fetchEmployeesOfACompanyByCategory;
			dispatch(addEmployees(employees));
			dispatch(employeeNotLoading());
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(employeeNotLoading());
		});
};

/**
 * Gets pending employees
 */
export const getPendingEmployees = () => dispatch => {
	dispatch(employeeIsLoading());
	employeeQueries.getPendingEmployees()
		.then(res => {
			const employees = res.data.fetchEmployeesOfACompanyByCategory;
			dispatch(addEmployees(employees));
			dispatch(employeeNotLoading());
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(employeeNotLoading());
		});
};

/**
 * Gets suspended employees
 */
export const getSuspendedEmployees = () => dispatch => {
	dispatch(employeeIsLoading());
	employeeQueries.getSuspendedEmployees()
		.then(res => {
			const employees = res.data.fetchEmployeesOfACompanyByCategory;
			dispatch(addEmployees(employees));
			dispatch(employeeNotLoading());
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(employeeNotLoading());
		});
};

/**
 * Gets specific employee by id
 */
export const getEmployee = (id) => dispatch => {
	dispatch(employeeIsLoading());
	employeeQueries.getEmployeeById(id)
		.then(res => {
			const employee = res.data.userById;
			dispatch(addEmployee(employee));
			dispatch(employeeNotLoading());
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(employeeNotLoading());
		});
};

export const suspendEmployee = (id) => dispatch => {
	dispatch(employeeIsLoading());
	employeeQueries.suspendEmployee(id)
		.then(res => {
			if (res.data) {
				const message = res.data.suspendEmployee.message;
				dispatch(getActiveEmployees());
				dispatch(successAlert(message));
			}
			if (res.errors) {
				dispatch(errorAlert({msg: res.errors[0].message}));
				dispatch(employeeNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(employeeNotLoading());
		});
};

export const unSuspendEmployee = (id) => dispatch => {
	dispatch(employeeIsLoading());
	employeeQueries.unSuspendEmployee(id)
		.then(res => {
			if (res.data) {
				const message = res.data.unSuspendEmployee.message;
				dispatch(getSuspendedEmployees());
				dispatch(successAlert(message));
			}
			if (res.errors) {
				dispatch(errorAlert({msg: res.errors[0].message}));
				dispatch(employeeNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(employeeNotLoading());
		});
};

export const removeEmployee = (id, history) => dispatch => {
	dispatch(employeeIsLoading());
	employeeQueries.removeEmployee(id)
		.then(res => {
			if (res.data) {
				const message = res.data.removeEmployee.message;
				dispatch(getActiveEmployees());
				history.push('/employees');
				dispatch(successAlert(message));
			}
			if (res.errors) {
				dispatch(errorAlert({msg: res.errors[0].message}));
				dispatch(employeeNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(employeeNotLoading());
		});
};

export const resendEmployeeInvite = (id, history) => (dispatch) => {
	dispatch(employeeIsLoading());
	employeeQueries
		.resendEmployeeInvite(id)
		.then((res) => {
			if (res.data) {
				const message = res.data.resendCompanyAddEmployeeEmail.message;
				dispatch(getPendingEmployees());
				history.push('/employees/pending');
				dispatch(successAlert(message));
			}
			if (res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
				dispatch(employeeNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({ msg: 'Network Error!!' }));
			dispatch(employeeNotLoading());
		});
};

export const searchEmployees = searchInput => dispatch => {
	dispatch(employeeIsLoading());
	employeeQueries.searchEmployees(searchInput)
		.then(res => {
			if (res.data) {
				const employees = res.data.searchEmployee;
				dispatch(addEmployees(employees));
				dispatch(employeeNotLoading());
			}
			if (res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
				dispatch(employeeNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({ msg: 'Network Error!!' }));
			dispatch(employeeNotLoading());
		});
};