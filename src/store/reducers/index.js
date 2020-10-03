import { combineReducers } from 'redux';

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

const rootReducer = combineReducers({
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

export default rootReducer;