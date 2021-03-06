
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import errorImg from '../assets/405.svg';
import errorTopImg from '../assets/405_top.svg';
import CommonAuthFlowPage from '../components/forms/authentications/CommonAuthFlowPages';


function NotActivated({user}) {
	return (
		<CommonAuthFlowPage
			img={errorImg}
			absImg={errorTopImg}
			title={'Please activate your account.'}
			detail={'Contact the ChooseLife Admin to activate your account and try again?'}
			buttonText={'BACK TO HOME'}
			link={user.isAuthenticated ?
				'/dashboard' :
				'/' }
		/>
	);
}


NotActivated.propTypes = {
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

export default connect(mapStateToProps)(NotActivated);
