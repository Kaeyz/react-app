import React from 'react';
import HomeHero from '../components/home/HomeHero';
import VideoCarousel from '../components/home/VideoCarousel';
import Card1 from '../components/home/Card1';
import AppLayout from '../components/layouts/appLayout/AppLayout';
import Subscribe from '../components/subscribe/Subscribe';
import Blog from '../components/blog/Blog';
import Drive from '../components/aboutUs/Drive';
import Clients from '../components/aboutUs/Clients';

const Home = () => {
	return (
		<AppLayout>
			<HomeHero />
			<VideoCarousel />
			<Card1 />
			<Clients />
			<Drive />
			<Blog />
			<Subscribe />
		</AppLayout>
	);
};
export default Home;
