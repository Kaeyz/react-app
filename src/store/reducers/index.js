import { combineReducers } from 'redux';

import appReducer from './appReducer';
import alertsReducer from './alertsReducer';

const rootReducer = combineReducers({
	app: appReducer,
	alerts: alertsReducer,
});

export default rootReducer;