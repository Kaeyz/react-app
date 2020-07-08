import {ADD_QUESTIONS, REMOVE_QUESTIONS } from '../types';

const initialState = {
	questions: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
	case ADD_QUESTIONS:
		return {questions: action.payload };
	case REMOVE_QUESTIONS:
		return {questions: [] };
	default:
		return state;
	}
}