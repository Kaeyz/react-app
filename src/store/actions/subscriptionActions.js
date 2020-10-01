import subscriptionQueries from '../../client/queries/subscriptionQueries';
import { errorAlert, successAlert } from './alertActions';

export const subscribeToEmail = (input) => dispatch => {
	subscriptionQueries.subscribeToEmailList(input)
		.then(res => {
			if (res.data) {
				dispatch(successAlert(res.data.subscribeToEmailList.message));
			}
			if (res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
			}
		})
		.catch(() => {
			dispatch(errorAlert({ msg: 'Connection Error! Try Again!!' }));
		});
};