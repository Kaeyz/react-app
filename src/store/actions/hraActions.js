import { ADD_QUESTIONS } from '../types';
import hraQueries from '../../client/queries/hraQueries';
import { errorAlert } from '../actions/alertActions';

const addQuestions = (payload) => {
	return { type: ADD_QUESTIONS, payload };
};

export const getQuestions = (category) => dispatch => {
	hraQueries.getQuestion(category)
		.then(res => {
			dispatch(addQuestions(res.data.fetchHraQuestion.q));
		})
		.catch(() => {
			dispatch(addQuestions([]));
			dispatch(errorAlert('Network Error!!'));
		});
};
