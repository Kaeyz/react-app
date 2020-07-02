import React from 'react';
// import PropTypes from 'prop-types'
import errorImg from '../../assets/404.svg';
import CommonAuthFlowPage from '../../components/forms/authentications/CommonAuthFlowPages';


function Page404() {
	return (
		<CommonAuthFlowPage
			img={errorImg}
			title={'Oops! Page not found'}
			detail={'Maybe try again?'}
			buttonText={'BACK TO HOME'}
			link={'/'}
		/>
	);
}

// Page404.propTypes = {

// }

export default Page404;
