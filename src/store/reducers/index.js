import { combineReducers } from 'redux';
import { CLEAR_SESSION } from '../types';

import appReducer from './appReducer';
import alertsReducer from './alertsReducer';
import userReducer from './userReducer';
import hraReducer from './hraReducer';
import reportReducer from './reportReducer';
import companyReducer from './companyReducer';
import employeeReducer from './employeeReducer';
import rewardReducer from './rewardReducer';
import appointmentReducer from './appointmentReducer';
import bmiReducer from './bmiReducer';

const reducers = combineReducers({
	app: appReducer,
	alerts: alertsReducer,
	user: userReducer,
	hra: hraReducer,
	report: reportReducer,
	company: companyReducer,
	employee: employeeReducer,
	reward: rewardReducer,
	appointment: appointmentReducer,
	bmi: bmiReducer,
});

const rootReducer = (state, action) => {
	// Clear all data in redux store to initial.
	if(action.type === CLEAR_SESSION) state = undefined;
	return reducers(state, action);
};




export default rootReducer;