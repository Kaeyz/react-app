import React from 'react';
import Routes from '../src/routes/routes';
import { connect } from 'react-redux';
import { setCurrentUser } from './store/actions/userActions';
import Theme from './Theme';
import PropTypes from 'prop-types';

function App({ setCurrentUser, app }) {

	React.useEffect(() => {
		setCurrentUser();
	}, [setCurrentUser]);

	return (
		<Theme>
			{!app.appIsLoading && <Routes />}
		</Theme>
	);
}

App.propTypes = {
	setCurrentUser: PropTypes.func.isRequired,
	app: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	app: state.app
});

export default connect(mapStateToProps, {setCurrentUser})(App);
