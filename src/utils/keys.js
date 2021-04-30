const keys = {
	server: process.env.REACT_APP_SERVER,
	ghmServer: process.env.NODE_ENV == 'development' ? process.env.REACT_APP_GHM_SERVER_TEST : process.env.REACT_APP_GHM_SERVER
};


export default Object.freeze(keys);