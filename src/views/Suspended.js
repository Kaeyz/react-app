import React from 'react';
import PropTypes from 'prop-types';
import errorImg from '../assets/suspended.svg';
import CommonAuthFlowPage from '../components/forms/authentications/CommonAuthFlowPages';
import { connect } from 'react-redux';


function Suspended({user}) {
	return (
		<CommonAuthFlowPage
			img={errorImg}
			title={'Sorry! You account might have been suspended. Please contact administration'}
			detail={'Maybe try again?'}
			buttonText={'BACK TO HOME'}
			link={user.isAuthenticated ?
				'/dashboard' :
				'/' }
		/>
	);
}


Suspended.propTypes = {
	user: PropTypes.object.isRequired,

};
const mapStateToProps = state => {
	const {
		isAuthenticated,
		user: { adminVerified, suspended }
	} = state.user;
	const user = { isAuthenticated, adminVerified, suspended };
	return { user };
};

export default connect(mapStateToProps)(Suspended);
