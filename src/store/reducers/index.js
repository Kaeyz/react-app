import { combineReducers } from 'redux';

import appReducer from './appReducer';
import alertsReducer from './alertsReducer';
import userReducer from './userReducer';
import hraReducer from './hraReducer';
import reportReducer from './reportReducer';

const rootReducer = combineReducers({
	app: appReducer,
	alerts: alertsReducer,
	user: userReducer,
	hra: hraReducer,
	report: reportReducer
});

export default rootReducer;