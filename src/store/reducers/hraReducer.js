import {ADD_QUESTIONS, REMOVE_QUESTIONS, CLEAR_HRA_INPUT, CLEAR_HRA_INPUTS, HRA_INPUT_CHANGE, HRA_IS_LOADING, SET_PERCENTAGE_COMPLETED, HRA_NOT_LOADING, SET_SHOW_INPUT,SET_REPORT_DATA
} from '../types';
import hraInputs from '../../utils/hraInputs';

const initialState = {
	questions: {},
	isLoading: false,
	inputs: hraInputs,
	showInput: {},
	percentageCompleted: 0,
	reportData: {}
};

export default function (state = initialState, action) {
	switch (action.type) {
	case ADD_QUESTIONS:
		return {
			...state,
			questions: {
				...state.questions,
				[action.payload.category]: action.payload.questions
			}
		};
	case REMOVE_QUESTIONS:
		return {
			...state,
			questions: {}
		};
	case HRA_INPUT_CHANGE:
		return {
			...state,
			inputs: {
				...state.inputs,
				[action.payload.field]: action.payload.value
			}
		};
	case CLEAR_HRA_INPUT:
		return {
			...state,
			inputs: {
				...state.inputs,
				[action.payload.field]: initialState[action.payload.field]
			}
		};
	case HRA_IS_LOADING:
		return {
			...state,
			isLoading: true
		};
	case 	HRA_NOT_LOADING:
		return {
			...state,
			isLoading: false
		};
	case CLEAR_HRA_INPUTS:
		return {
			...state,
			inputs: {}
		};
	case SET_PERCENTAGE_COMPLETED:
		return {
			...state,
			percentageCompleted: action.payload
		};
	case SET_REPORT_DATA:
		return {
			...state,
			reportData: action.payload
		};
	case SET_SHOW_INPUT:
		return {
			...state,
			showInput: {
				...state.showInput,
				[action.payload.input] : action.payload.state
			}
		};
	default:
		return state;
	}
}
