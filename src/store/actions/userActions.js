//import jwtDecode from 'jwt-decode';
import { appIsLoading, appNotLoading } from './appActions';
import { errorAlert, successAlert, clearAlert } from './alertActions';
import { SET_USER, SET_AUTH } from '../types';
import userQueries from '../../client/queries/userQueries';
import {fetchHraResponse } from './hraActions';


export const setIsAuthenticated = (payload) => {
	return { type: SET_AUTH, payload: payload};
};

export const setCurrentUser = () => dispatch => {
	userQueries.getCurrentUser()
		.then(res => {
			if (res.errors) {
				localStorage.removeItem('auth');
				dispatch(setIsAuthenticated(false));
				dispatch({ type: SET_USER, payload: {} });
				dispatch(appNotLoading());
			}
			if (res.data.me) {
				dispatch({type: SET_USER, payload: res.data.me});
				dispatch(setIsAuthenticated(true));
				dispatch(fetchHraResponse());
				dispatch(appNotLoading());
			}
		})
		.catch(() => {
			localStorage.removeItem('auth');
			dispatch(setIsAuthenticated(false));
			dispatch({ type: SET_USER, payload: {} });
			dispatch(appNotLoading());
		});
};

export const registerIndividual = (userData, history) => dispatch => {
	userQueries.signUp(userData)
		.then(res => {
			if(res.data) {
				const token = res.data.signup.token;
				localStorage.setItem('auth', token);
				dispatch(setIsAuthenticated(true));
				dispatch(setCurrentUser());
				history.push('/onboarding/account_success');
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
			if (res.data) {
				const token = res.data.registerCompany.token;
				localStorage.setItem('auth', token);
				dispatch(setIsAuthenticated(true));
				dispatch(setCurrentUser());
				history.push('/onboarding/account_success');
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
export const loginUser = (userData) => dispatch => {
	dispatch(clearAlert());
	userQueries.login(userData)
		.then(res => {
			if(res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
				dispatch(setIsAuthenticated(false));
				dispatch(appNotLoading());
			}
			if (res.data) {
				dispatch(appIsLoading());
				const { token } = res.data.login;
				localStorage.setItem('auth', token);
				dispatch(setIsAuthenticated(true));
				dispatch(setCurrentUser());
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
	dispatch({ type: SET_USER, payload: {} });

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

export const resetPassword = (data) => dispatch => {
	dispatch(appIsLoading());
	dispatch(clearAlert());
	userQueries.resetPassword(data)
		.then(res => {
			if (res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
				dispatch(appNotLoading());
			}
			if (res.data) {
				dispatch(appIsLoading());
				const { token } = res.data.resetPassword;
				localStorage.setItem('auth', token);
				dispatch(setIsAuthenticated(true));
				dispatch(setCurrentUser());
				dispatch(appNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({ msg: 'Connection Error: Try again!!' }));
		});
};

export const updateUser = (data) => dispatch => {
	dispatch(appIsLoading());
	dispatch(clearAlert());
	userQueries.updateUser(data)
		.then(res => {
			if (res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
				dispatch(appNotLoading());
			}
			if (res.data) {
				dispatch({ type: SET_USER, payload: res.data.updateUser });
				dispatch(appNotLoading());
				dispatch(successAlert('User Updated'));
			}
		})
		.catch(() => {
			dispatch(appNotLoading());
			dispatch(errorAlert({ msg: 'Connection Error: Try again!!' }));
		});
};

export const updateUserPassword = (data) => dispatch => {
	dispatch(clearAlert());
	userQueries.updateUserPassword(data)
		.then(res => {
			if (res.errors) {
				dispatch(errorAlert({ msg: 'Invalid Input' }));
			}
			if (res.data) {
				dispatch(successAlert(res.data.updateUserPassword.message));
			}
		})
		.catch(() => {
			dispatch(errorAlert({ msg: 'Connection Error: Try again!!' }));
		});
};