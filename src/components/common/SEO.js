import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ children, location, description, title, image }) {
	// fetch data
	return (
		<Helmet
			titleTemplate={'%s - chooselife wellness'}
		>
			<html lang="en" />
			<title>{title || 'chooselife wellness platform'}</title>

			{/* Fav Icons */}
			<link
				rel="icon"
				type="image/svg+xml"
				href="../../assets/Frame.svg"
			/>

			<link rel="apple-touch-icon" href="../../assets/Frame.svg" />
			<link rel="manifest" href="../../../public/manifest.json" />

			{/* Meta Tags */}
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta charSet="utf-8" />
			<meta name="theme-color" content="#9ecd43" />
			<meta name="title" content="ChooseLife" />
			<meta
				name="description"
				content={
					description ||
					'We are a Wellness solutions provider empowering both individuals organizations with the data, tools, and guides, to improve their physical and mental wellbeing. Using innovative technology that gives intelligent verifiable analytics and progress reports on wellness performance, Choose Life is driving Wellness into corporate culture and individual lifestyles.'
				}
			/>

			{/* Open Graph */}
			{location && (
				<meta property="og:url" content={window.location.href} />
			)}
			<meta
				property="og:image"
				content={
					image ||
					'https://res.cloudinary.com/drnqdd87d/image/upload/q_auto,r_0/a_0/v1604448094/chooselife/shalom-mwenesi-JOx7sRRpqhI-unsplashchooselife-welcome.png'
				}
			/>
			<meta
				property="og:title"
				content={title || 'chooselife wellness platform'}
				key="ogtitle"
			/>
			<meta
				property="og:site_name"
				content="chooselife wellness"
				key="ogsitename"
			/>
			<meta
				property="og:description"
				content={
					description ||
					'We are a Wellness solutions provider empowering both individuals organizations with the data, tools, and guides, to improve their physical and mental wellbeing. Using innovative technology that gives intelligent verifiable analytics and progress reports on wellness performance, Choose Life is driving Wellness into corporate culture and individual lifestyles.'
				}
				key="ogdesc"
			/>
			{/* facebook */}
			<meta property="og:type" content="website" />
			<meta
				property="og:url"
				content="https://web.facebook.com/FitnessFairNG"
			/>
			<meta property="og:title" content="ChooseLife" />
			<meta
				property="og:description"
				content={
					description ||
					'We are a Wellness solutions provider empowering both individuals organizations with the data, tools, and guides, to improve their physical and mental wellbeing. Using innovative technology that gives intelligent verifiable analytics and progress reports on wellness performance, Choose Life is driving Wellness into corporate culture and individual lifestyles..'
				}
			/>
			<meta
				property="og:image"
				content="https://res.cloudinary.com/dsqnyciqg/image/upload/v1599793224/chooseLife/Frame_g4icy6.svg"
			/>

			{/* linkedIn */}
			<meta property="og:type" content="website" />
			<meta
				property="og:url"
				content="https://www.linkedin.com/company/fitness-fair-ltd/"
			/>
			<meta property="og:title" content="ChooseLife" />
			<meta
				property="og:description"
				content={
					description ||
					'We are a Wellness solutions provider empowering both individuals organizations with the data, tools, and guides, to improve their physical and mental wellbeing. Using innovative technology that gives intelligent verifiable analytics and progress reports on wellness performance, Choose Life is driving Wellness into corporate culture and individual lifestyles.'
				}
			/>
			<meta
				property="og:image"
				content="https://res.cloudinary.com/dsqnyciqg/image/upload/v1599793224/chooseLife/Frame_g4icy6.svg"
			/>

			{/* <!-- Twitter --> */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta
				property="twitter:url"
				content="https://twitter.com/fitnessfairng"
			/>
			<meta property="twitter:title" content="ChooseLife" />
			<meta
				property="twitter:description"
				content={
					description ||
					'We are a Wellness solutions provider empowering both individuals organizations with the data, tools, and guides, to improve their physical and mental wellbeing. Using innovative technology that gives intelligent verifiable analytics and progress reports on wellness performance, Choose Life is driving Wellness into corporate culture and individual lifestyles.'
				}
			/>
			<meta
				property="twitter:image"
				content="https://res.cloudinary.com/dsqnyciqg/image/upload/v1599793224/chooseLife/Frame_g4icy6.svg"
			/>

			{children}
		</Helmet>
	);
}

SEO.propTypes = {
	children: PropTypes.any,
	description: PropTypes.any,
	image: PropTypes.string,
	location: PropTypes.any,
	title: PropTypes.string
};
