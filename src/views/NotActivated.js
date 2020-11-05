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
			detail={'Contact the ChooseLife Admin to activate your account and try again?'}
			buttonText={'BACK TO HOME'}
			link={'/'}
		/>
	);
}


export default NotActivated;
