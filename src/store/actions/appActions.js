import landingPageQueries from '../../client/queries/landingPageQueries';
import { APP_IS_LOADING, APP_NOT_LOADING } from '../types';
import { errorAlert, successAlert } from './alertActions';


export const appIsLoading = () => {
	return {
		type: APP_IS_LOADING,
	};
};

export const appNotLoading = () => {
	return {
		type: APP_NOT_LOADING,
	};
};

export const contactUs = (data) => (dispatch) => {
	landingPageQueries
		.contactUs(data)
		.then((res) => {
			const { message } = res.data.ContactUs;
			dispatch(successAlert(message));

		})
		.catch(() => {
			dispatch(errorAlert({ msg: 'Network Error!!' }));
		});
};
