import React from 'react';
import PropTypes from 'prop-types';
import errorImg from '../assets/404.svg';
import CommonAuthFlowPage from '../components/forms/authentications/CommonAuthFlowPages';
import { connect } from 'react-redux';


function Page404({user}) {
	return (
		<CommonAuthFlowPage
			img={errorImg}
			title={'Oops! Page not found'}
			detail={'Maybe try again?'}
			buttonText={'BACK TO HOME'}
			link={user.isAuthenticated ?
				'/dashboard' :
				'/' }
		/>
	);
}

Page404.propTypes = {
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

export default connect(mapStateToProps)(Page404);

