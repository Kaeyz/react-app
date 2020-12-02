import { combineReducers } from 'redux';
import { CLEAR_SESSION } from '../types';

import appointmentReducer from './appointmentReducer';
import employeeReducer from './employeeReducer';
import exerciseReducer from './exerciseReducer';
import companyReducer from './companyReducer';
import alertsReducer from './alertsReducer';
import rewardReducer from './rewardReducer';
import reportReducer from './reportReducer';
import userReducer from './userReducer';
import mealReducer from './mealReducer';
import blogReducer from './blogReducer';
import appReducer from './appReducer';
import hraReducer from './hraReducer';
import bmiReducer from './bmiReducer';


const reducers = combineReducers({
	app: appReducer,
	alerts: alertsReducer,
	user: userReducer,
	hra: hraReducer,
	report: reportReducer,
	company: companyReducer,
	employee: employeeReducer,
	exercise: exerciseReducer,
	reward: rewardReducer,
	appointment: appointmentReducer,
	bmi: bmiReducer,
	blog: blogReducer,
	meal: mealReducer,
});

const rootReducer = (state, action) => {
	// Clear all data in redux store to initial.
	if(action.type === CLEAR_SESSION) state = undefined;
	return reducers(state, action);
};


export default rootReducer;