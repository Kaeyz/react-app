//import jwtDecode from 'jwt-decode';
import { appIsLoading, appNotLoading } from './appActions';
import { errorAlert, successAlert, clearAlert } from './alertActions';
import { SET_USER } from '../types';
import userQueries from '../../client/queries/userQueries';

export const setAuthToken = token => {
	return localStorage.setItem('auth', token);
};

export const setCurrentUser = (decode) => {
	return { type: SET_USER, payload: decode};
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


export const loginUser = (userData, history) => dispatch => {
	dispatch(appIsLoading());
	dispatch(clearAlert());
	userQueries.login(userData)
		.then(res => {
			if (res.data) {
				const { token } = res.data.login;
				dispatch(setAuthToken(token));
				dispatch(appNotLoading());
				history.push('/dashboard');
			}
			if(res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
				dispatch(appNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({ msg: 'Connection Error: Try again!!' }));
		});
};

export const logoutUser = () => {
	// Remove token from localStorage
	localStorage.removeItem('auth');
};