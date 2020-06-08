import React from 'react';
import HomeHero from '../components/home/HomeHero';
import VideoCarousel from '../components/home/VideoCarousel';
import Card1 from '../components/home/Card1';
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
