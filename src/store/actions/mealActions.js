import mealQueries from '../../client/queries/mealQueries';
import { ADD_MEAL_PLAN, CLEAR_MEAL_PLAN, ADD_MEAL_OPTIONS, MEAL_IS_LOADING, MEAL_NOT_LOADING
} from '../types';
import { errorAlert, successAlert } from './alertActions';

const mealIsLoading = () => {
	return { type: MEAL_IS_LOADING };
};

const mealNotLoading = () => {
	return { type: MEAL_NOT_LOADING };
};

const addMealPlan = (mealPlan) => {
	return { type: ADD_MEAL_PLAN, payload: mealPlan };
};

const clearMealPlan = () => {
	return { type: CLEAR_MEAL_PLAN };
};

const addMealOptions = (mealOptions) => {
	return { type: ADD_MEAL_OPTIONS, payload: mealOptions };
};

// Get mealPlan
export const getMealPlan = () => dispatch => {
	dispatch(mealIsLoading());
	mealQueries.getMealPlan()
		.then(res => {
			if (res.errors) {
				dispatch(mealNotLoading());
			}
			if (res.data.fetchMealPlan) {
				dispatch(addMealPlan(res.data.fetchMealPlan.mealPlanData));
				dispatch(mealNotLoading());
			}
		})
		.catch(() => {
			dispatch(mealNotLoading());
		});
};

// Get mealPlan Options
export const getMealOptions = () => dispatch => {
	dispatch(mealIsLoading());
	mealQueries.getMealOptions()
		.then(res => {
			if (res.errors) {
				dispatch(errorAlert({msg: res.errors[0].message}));
				dispatch(mealNotLoading());
			}
			if (res.data.fetchMealOptions) {
				dispatch(addMealOptions(res.data.fetchMealOptions));
				dispatch(mealNotLoading());
			}
		})
		.catch(() => {
			dispatch(mealNotLoading());
		});
};

// Generate new meal plan
export const generateMealPlan = (userChoice) => dispatch => {
	dispatch(mealIsLoading());
	mealQueries.createMealPlan(userChoice)
		.then(res => {
			if (res.errors) {
				dispatch(errorAlert({msg: res.errors[0].message}));
				dispatch(mealNotLoading());
			}
			if (res.data.generateMealPlan) {
				dispatch(addMealPlan(res.data.generateMealPlan));
				dispatch(mealNotLoading());
			}
		})
		.catch(() => {
			dispatch(mealNotLoading());
		});
};

// delete meal plan
export const deleteMealPlan = () => dispatch => {
	dispatch(mealIsLoading());
	mealQueries.deleteMealPlan()
		.then(res => {
			if (res.errors) {
				dispatch(errorAlert({msg: res.errors[0].message}));
				dispatch(mealNotLoading());
			}
			if (res.data) {
				dispatch(clearMealPlan());
				dispatch(successAlert(res.data.ResetMealPlan.message));
				dispatch(mealNotLoading());
			}
		})
		.catch(() => {
			dispatch(mealNotLoading());
		});
};





