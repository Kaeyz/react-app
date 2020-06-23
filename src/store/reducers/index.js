import { combineReducers } from 'redux';

import appReducer from './appReducer';
import alertsReducer from './alertsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
	app: appReducer,
	alerts: alertsReducer,
	user: userReducer
});

export default rootReducer;