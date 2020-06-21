//import jwtDecode from 'jwt-decode';
import { APP_IS_LOADING, APP_NOT_LOADING} from '../types';
//import keys from '../../config/keys';
//import { setAuthToken, setCurrentUser, logoutUser } from './userActions';

export const appIsLoading = () => {
	return {
		type: APP_IS_LOADING,
	};
};

export const appNotLoading = () => {
	return {
		type: APP_NOT_LOADING,
	};
};


/* const serverIsConnected = (payload) => {
	return {
		type: SERVER_IS_CONNECTED,
		payload: payload
	};
}; */

/* const serverNotConnected = (payload) => {
	return {
		type: SERVER_NOT_CONNECTED,
		payload: payload
	};
}; */

/* export const authenticateUser = () => dispatch => {
  const token = localStorage.getItem('jwtToken');
  if (token) {
    setAuthToken(token);
    const decoded = jwtDecode(token);
    dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
      dispatch(logoutUser());
    }
  }
}; */

/* export const connectServer = () => dispatch => {
	axios.get(server)
		.then(res => {
			dispatch(serverIsConnected(res));
			//dispatch(authenticateUser());
		})
		.catch(err => dispatch(serverNotConnected(err)));
}; */