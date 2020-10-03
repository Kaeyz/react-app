import React from 'react';
// import PropTypes from 'prop-types'
import errorImg from '../assets/suspended.svg';
import CommonAuthFlowPage from '../components/forms/authentications/CommonAuthFlowPages';


function Suspended() {
	return (
		<CommonAuthFlowPage
			img={errorImg}
			title={'Sorry! You account might have been suspended. Please contact administration'}
			detail={'Maybe try again?'}
			buttonText={'BACK TO HOME'}
			link={'/'}
		/>
	);
}


export default Suspended;
