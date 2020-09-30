import React from 'react';
// import PropTypes from 'prop-types'
import errorImg from '../assets/404.svg';
import CommonAuthFlowPage from '../components/forms/authentications/CommonAuthFlowPages';


function Suspended() {
	return (
		<CommonAuthFlowPage
			img={errorImg}
			title={'Account suspended'}
			detail={'Please contact a Choose Life Admin'}
			buttonText={'BACK TO HOME'}
			link={'/'}
		/>
	);
}


export default Suspended;
