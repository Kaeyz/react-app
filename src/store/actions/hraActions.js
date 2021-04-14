import hraQueries from '../../client/queries/hraQueries';
import { errorAlert, successAlert } from '../actions/alertActions';
import {
	ADD_QUESTIONS,
	CLEAR_HRA_INPUT,
	CLEAR_HRA_INPUTS,
	HRA_INPUT_CHANGE,
	HRA_IS_LOADING,
	HRA_NOT_LOADING,
	SET_PERCENTAGE_COMPLETED,
	SET_SHOW_INPUT
} from '../types';

const addQuestions = (questions, category) => {
	return {
		type: ADD_QUESTIONS,
		payload: { questions, category },
	};
};

const hraIsLoading = () => {
	return { type: HRA_IS_LOADING };
};

const hraNotLoading = () => {
	return { type: HRA_NOT_LOADING };
};

/**
 * removes fields with '' or null
 * @param {object} obj
 */
const clean = (obj) => {
	for (const propName in obj) {
		if (obj[propName] === '' || obj[propName] === null) {
			delete obj[propName];
		}
	}
	return obj;
};

/**
 * Sets percentage of hra questions completed
 * @param {number} payload
 */
const setPercentageCompleted = (payload) => {
	return { type: SET_PERCENTAGE_COMPLETED, payload };
};

/**
 * Gets question based on question category
 * @param {string} category
 */
export const getQuestions = (category) => (dispatch, getState) => {
	dispatch(hraIsLoading());
	const hraState = getState().hra.questions;
	const questions = Object.prototype.hasOwnProperty.call(hraState, category);
	if (questions) {
		dispatch(hraNotLoading());
	} else {
		hraQueries
			.getQuestion(category)
			.then((res) => {
				const { q, prompt } = res.data.fetchHraQuestion;
				const questions = { q, prompt };
				dispatch(addQuestions(questions, category));
				dispatch(hraNotLoading());
			})
			.catch(() => {
				dispatch(addQuestions([], category));
				dispatch(errorAlert({ msg: 'Network Error!!' }));
				dispatch(hraNotLoading());
			});
	}
};

/**
 * @param {object} payload
 * @param {string} nextLink
 * @param {object} history
 */
export const saveQuestions = (payload, nextLink, history) => (dispatch) => {
	hraQueries
		.submitQuestion(clean(payload))
		.then((res) => {
			if (res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
				dispatch(hraNotLoading());
			}
			if (res.data?.submitHRAResponse) {
				dispatch(successAlert(res.data.submitHRAResponse.message));
				dispatch(
					setPercentageCompleted(
						res.data.submitHRAResponse?.percentageProgress,
					),
				);
				history.push(nextLink);
			}
		})
		.catch((error) => {
			if (error && error[0]?.message) {
				dispatch(errorAlert({ msg: error && error[0]?.message }));
			}
			dispatch(errorAlert({ msg: 'Network Error!!' }));
		});
};

export const onHraInputChange = (value, field) => {
	return {
		type: HRA_INPUT_CHANGE,
		payload: { value, field },
	};
};

const setHraInputs = (obj) => (dispatch) => {
	for (const propName in obj) {
		dispatch(onHraInputChange(obj[propName], propName));
	}
};

export const fetchHraResponse = () => (dispatch) => {
	hraQueries
		.getCurrentResponse()
		.then((res) => {
			if (res.data.me.currentHra !== null) {
				const {
					percentageProgress,
					questionAndResponse,
				} = res.data.me.currentHra;
				dispatch(setPercentageCompleted(percentageProgress));
				dispatch(setHraInputs(clean(questionAndResponse)));
			}
		})
		.catch(() => {
			dispatch(errorAlert({ msg: 'Network Error!!' }));
		});
};

export const clearHraInput = (field) => {
	return {
		type: CLEAR_HRA_INPUT,
		payload: field,
	};
};

export const clearHraInputs = () => {
	return { type: CLEAR_HRA_INPUTS };
};

export const setShowInput = (state, input) => {
	return {
		type: SET_SHOW_INPUT,
		payload: { state, input },
	};
};

export const setShowInputs = (state, inputs) => (dispatch) => {
	inputs &&
		inputs.length > 0 &&
		inputs.forEach((input) => {
			dispatch(setShowInput(state, input));
		});
};

export const validateShowHide = (field, rules) => (dispatch, getState) => {
	const value = getState().hra.inputs[field];
	rules &&
		rules.forEach((rule) => {
			if (rule.low !== null && value <= rule.low) {
				dispatch(setShowInputs(true, rule.show));
				dispatch(setShowInputs(false, rule.hide));
			}

			if (rule.high !== null && value >= rule.high) {
				dispatch(setShowInputs(true, rule.show));
				dispatch(setShowInputs(false, rule.hide));
			}
		});
};
