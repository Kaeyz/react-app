import exerciseQueries from '../../client/queries/exerciseQueries';
import { errorAlert } from './alertActions';
import { ADD_EXERCISES, ADD_EXERCISE, EXERCISE_IS_LOADING, EXERCISE_NOT_LOADING,
} from '../types';

const exerciseIsLoading = () => {
	return { type: EXERCISE_IS_LOADING };
};

const exerciseNotLoading = () => {
	return { type: EXERCISE_NOT_LOADING };
};

const setExercises = (exercises) => {
	return {
		type: ADD_EXERCISES,
		payload: exercises
	};
};

const setExercise = (exercise) => {
	return {
		type: ADD_EXERCISE,
		payload: exercise
	};
};

export const getExercises = () => dispatch => {
	dispatch(exerciseIsLoading());
	exerciseQueries.getAllExercises()
		.then(res => {
			dispatch(setExercises(res));
			dispatch(exerciseNotLoading());
		})
		.catch(() => {
			dispatch(exerciseNotLoading());
		});
};

export const getExercise = (id) => dispatch => {
	dispatch(exerciseIsLoading());
	exerciseQueries.getExerciseById(id)
		.then(res => {
			if (res) {
				dispatch(setExercise(res));
			}
			if (res.errors) {
				dispatch(errorAlert({msg: res.errors[0].message}));
				dispatch(exerciseNotLoading());
			}
		})
		.catch(() => {
			dispatch(exerciseNotLoading());
		});
};
