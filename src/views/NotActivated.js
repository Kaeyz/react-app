import React from 'react';
import errorImg from '../assets/405.svg';
import CommonAuthFlowPage from '../components/forms/authentications/CommonAuthFlowPages';
import errorTopImg from '../assets/405_top.svg';


function NotActivated() {
	return (
		<CommonAuthFlowPage
			img={errorImg}
			absImg={errorTopImg}
			title={'Please activate your account.'}
			detail={'Maybe try again?'}
			buttonText={'BACK TO HOME'}
			link={'/'}
		/>
	);
}


export default NotActivated;
