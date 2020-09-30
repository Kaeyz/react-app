import React from 'react';
import errorImg from '../assets/404.svg';
import CommonAuthFlowPage from '../components/forms/authentications/CommonAuthFlowPages';


function NotActivated() {
	return (
		<CommonAuthFlowPage
			img={errorImg}
			title={'Account not activated'}
			detail={'Please contact a Choose Life Admin'}
			buttonText={'BACK TO HOME'}
			link={'/'}
		/>
	);
}


export default NotActivated;
