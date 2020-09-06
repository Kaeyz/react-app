import companyQueries from '../../client/queries/companyQueries';
import { errorAlert } from '../actions/alertActions';
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