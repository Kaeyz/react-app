import React from 'react';
import Routes from '../src/routes/routes';
import { connect } from 'react-redux';
import { setCurrentUser } from './store/actions/userActions';
import Theme from './Theme';
import PropTypes from 'prop-types';

function App({ setCurrentUser }) {

	React.useEffect(() => {
		setCurrentUser();
	}, [setCurrentUser]);

	return (
		<Theme>
			<Routes />
		</Theme>
	);
}

App.propTypes = {
	setCurrentUser: PropTypes.func.isRequired
};

export default connect(null, {setCurrentUser})(App);
