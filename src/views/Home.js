import React from 'react';
import HomeHero from '../components/layouts/HomeHero';
import VideoCarousel from '../components/layouts/VideoCarousel';
import Card1 from '../components/layouts/Card1';
import AppLayout from '../components/layouts/appLayout/AppLayout';

const Home = () => {
	return (
		<AppLayout>
			<HomeHero />
			<VideoCarousel />
			<Card1 />
		</AppLayout>
	);
};
export default Home;
