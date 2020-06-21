import {SERVER_IS_CONNECTED, SERVER_NOT_CONNECTED, APP_IS_LOADING, APP_NOT_LOADING } from '../types';

const initialState = {
	appIsLoading: false,
	serverIsConnected: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
	case APP_IS_LOADING:
		return { ...state, appIsLoading: true };
	case APP_NOT_LOADING:
		return { ...state, appIsLoading: false };
	case SERVER_IS_CONNECTED:
		return { ...state, serverIsConnected: true };
	case SERVER_NOT_CONNECTED:
		return { ...state, serverIsConnected: false };
	default:
		return state;
	}
}