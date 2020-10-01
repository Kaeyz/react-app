import companyQueries from '../../client/queries/companyQueries';
import { errorAlert, successAlert } from '../actions/alertActions';
import {
	ADD_COMPANIES,
	ADD_COMPANY,
	COMPANY_IS_LOADING,
	COMPANY_NOT_LOADING,
} from '../types';


const addCompanies = (companies) => {
	return { type: ADD_COMPANIES, payload: companies };
};

const addCompany = (company) => {
	return { type: ADD_COMPANY, payload: company };
};

const companyIsLoading = () => {
	return { type: COMPANY_IS_LOADING };
};

const companyNotLoading = () => {
	return { type: COMPANY_NOT_LOADING };
};


/**
 * Gets registered companies
 */
export const getCompanies = () => dispatch => {
	dispatch(companyIsLoading());
	companyQueries.getCompanies()
		.then(res => {
			const companies = res.data.usersByType;
			dispatch(addCompanies(companies));
			dispatch(companyNotLoading());
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(companyNotLoading());
		});
};

/**
 * Gets pending companies
 */
export const getPendingCompanies = () => dispatch => {
	dispatch(companyIsLoading());
	companyQueries.getPendingCompanies()
		.then(res => {
			const companies = res.data.fetchPendingCompany;
			dispatch(addCompanies(companies));
			dispatch(companyNotLoading());
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(companyNotLoading());
		});
};

/**
 * Gets specific company by id
 */
export const getCompany = (id) => dispatch => {
	dispatch(companyIsLoading());
	companyQueries.getCompanyById(id)
		.then(res => {
			const company = res.data.userById;
			dispatch(addCompany(company));
			dispatch(companyNotLoading());
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(companyNotLoading());
		});
};

export const activateCompany = (id, activationToken) => dispatch => {
	dispatch(companyIsLoading());
	companyQueries.activateCompany(activationToken)
		.then(res => {
			if (res.data) {
				const message = res.data.activateCompany.message;
				dispatch(getCompany(id));
				dispatch(successAlert(message));
			}
			if (res.errors) {
				dispatch(errorAlert({msg: 'Activation Failed'}));
				dispatch(companyNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(companyNotLoading());
		});
};

export const suspendCompany = (id) => dispatch => {
	dispatch(companyIsLoading());
	companyQueries.suspendCompany(id)
		.then(res => {
			if (res.data) {
				const message = res.data.suspendCompany.message;
				dispatch(getCompany(id));
				dispatch(successAlert(message));
			}
			if (res.errors) {
				dispatch(errorAlert({msg: 'Failed'}));
				dispatch(companyNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(companyNotLoading());
		});
};

export const reactivateCompany = (id) => dispatch => {
	dispatch(companyIsLoading());
	companyQueries.reactivateCompany(id)
		.then(res => {
			if (res.data) {
				const message = res.data.unSuspendCompany.message;
				dispatch(getCompany(id));
				dispatch(successAlert(message));
			}
			if (res.errors) {
				dispatch(errorAlert({msg: 'Failed'}));
				dispatch(companyNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(companyNotLoading());
		});
};

export const setEmployeeLimit = (amount, id) => dispatch => {
	dispatch(companyIsLoading());
	companyQueries.setEmployeeLimit(amount, id)
		.then(res => {
			if (res.data) {
				const message = res.data.setEmployeeLimit.message;
				dispatch(getCompany(id));
				dispatch(successAlert(message));
			}
			if (res.errors) {
				dispatch(errorAlert({msg: 'Failed'}));
				dispatch(companyNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(companyNotLoading());
		});
};

export const searchCompanies = searchInput => dispatch => {
	dispatch(companyIsLoading());
	companyQueries.searchCompanies(searchInput)
		.then(res => {
			if (res.data) {
				const companies = res.data.searchCompany;
				dispatch(addCompanies(companies));
				dispatch(companyNotLoading());
			}
			if (res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
				dispatch(companyNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({ msg: 'Network Error!!' }));
			dispatch(companyNotLoading());
		});
};