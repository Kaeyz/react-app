import { ADD_QUESTIONS } from '../types';
import hraQueries from '../../client/queries/hraQueries';

const addQuestions = (payload) => {
	return { type: ADD_QUESTIONS, payload }
};

export const getQuestions = (category) => dispatch => {
	hraQueries.getQuestion(category)
		.then(res => {
			dispatch(addQuestions(res.data.fetchHraQuestion.q));
		})
		.catch(err => {
			console.error(err);
		});
};


