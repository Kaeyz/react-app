import React from 'react';
import AppLayout from '../components/layouts/appLayout/AppLayout';
import LatestBlog from '../components/blog/LatestBlog';
import Subscribe from '../components/subscribe/Subscribe';
import Leadership from '../components/about/Leadership';
import WellnessInfo from '../components/about/WellnessInfo';
import TopBanner from '../components/about/TopBanner';
import AboutVideo from '../components/about/AboutVideo';
import OfficerMessage from '../components/about/OfficerMessage';

const About = () => {
	return (
		<AppLayout>
			<TopBanner />
			<AboutVideo />
			<OfficerMessage />
			<WellnessInfo />
			<Leadership />
			<LatestBlog />
			<Subscribe />
		</AppLayout>
	);
};
export default About;
