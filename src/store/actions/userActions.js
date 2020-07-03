//import jwtDecode from 'jwt-decode';
import { appIsLoading, appNotLoading } from './appActions';
import { errorAlert, successAlert, clearAlert } from './alertActions';
import { SET_USER } from '../types';
import userQueries from '../../client/queries/userQueries';


export const setIsAuthenticated = (payload) => {
	return { type: SET_USER, payload: payload};
};

export const registerIndividual = (userData, history) => dispatch => {
	userQueries.signUp(userData)
		.then(res => {
			if(res.data) {
				dispatch(successAlert('Successful. Please Login'));
				history.push('/login');
			}
			if (res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
			}
		})
		.catch(() => {
			errorAlert('Connection Error! Try Again!!');
		});
};

export const registerCompany = (userData, history) => dispatch => {

	userQueries.registerCompany(userData)
		.then(res => {
			if(res.data) {
				history.push('/onboarding/success');
			}
			if (res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
			}
		})
		.catch(() => {
			errorAlert('Connection Error! Try Again!!');
		});
};


// eslint-disable-next-line no-unused-vars
export const loginUser = (userData, history) => dispatch => {
	dispatch(appIsLoading());
	dispatch(clearAlert());
	userQueries.login(userData)
		.then(res => {
			if(res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
				dispatch(setIsAuthenticated(false));
				dispatch(appNotLoading());
			}
			if (res.data) {
				const { token } = res.data.login;
				localStorage.setItem('auth', token);
				dispatch(setIsAuthenticated(true));
				dispatch(appNotLoading());
			}
		})
		.catch(() => {
			dispatch(setIsAuthenticated(false));
			dispatch(errorAlert({ msg: 'Connection Error: Try again!!' }));
		});
};

export const logoutUser = () => dispatch =>  {
	// Remove token from localStorage
	localStorage.removeItem('auth');
	dispatch(setIsAuthenticated(false));
};

export const forgotPassword = (data, history) => dispatch => {
	dispatch(appIsLoading());
	dispatch(clearAlert());
	userQueries.forgotPassword(data)
		.then(res => {
			if(res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
				dispatch(appNotLoading());
			}
			if (res.data) {
				history.push('/reset_link_sent', { email: data });
				dispatch(appNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({ msg: 'Connection Error: Try again!!' }));
		});
};

export const resetPassword = (data, history) => dispatch => {
	dispatch(appIsLoading());
	dispatch(clearAlert());
	userQueries.resetPassword(data)
		.then(res => {
			if (res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
				dispatch(appNotLoading());
			}
			if (res.data) {
				history.push('/reset_success');
				dispatch(appNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({ msg: 'Connection Error: Try again!!' }));
		});
};