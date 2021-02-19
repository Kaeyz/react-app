import { combineReducers } from 'redux';
import { CLEAR_SESSION } from '../types';
import alertsReducer from './alertsReducer';
import appointmentReducer from './appointmentReducer';
import appReducer from './appReducer';
import blogReducer from './blogReducer';
import bmiReducer from './bmiReducer';
import companyReducer from './companyReducer';
import employeeReducer from './employeeReducer';
import exerciseReducer from './exerciseReducer';
import hraReducer from './hraReducer';
import infoReducer from './infoReducer';
import mealReducer from './mealReducer';
import reportReducer from './reportReducer';
import rewardReducer from './rewardReducer';
import userReducer from './userReducer';



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
	info: infoReducer
});

const rootReducer = (state, action) => {
	// Clear all data in redux store to initial.
	if(action.type === CLEAR_SESSION) state = undefined;
	return reducers(state, action);
};


export default rootReducer;