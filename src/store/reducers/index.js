import { combineReducers } from 'redux';

import appReducer from './appReducer';
import alertsReducer from './alertsReducer';
import userReducer from './userReducer';
import hraReducer from './hraReducer';
import reportReducer from './reportReducer';
import companyReducer from './companyReducer';
import employeeReducer from './employeeReducer';
import rewardReducer from './rewardReducer';

const rootReducer = combineReducers({
	app: appReducer,
	alerts: alertsReducer,
	user: userReducer,
	hra: hraReducer,
	report: reportReducer,
	company: companyReducer,
	employee: employeeReducer,
	reward: rewardReducer,
});

export default rootReducer;