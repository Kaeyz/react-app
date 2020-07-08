import { APP_IS_LOADING, APP_NOT_LOADING} from '../types';


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

