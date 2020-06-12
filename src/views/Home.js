import React from 'react';
import HomeHero from '../components/home/HomeHero';
import LongCard from '../components/home/LongCard';
import AppLayout from '../components/layouts/appLayout/AppLayout';
import Subscribe from '../components/subscribe/Subscribe';
import LatestBlog from '../components/blog/LatestBlog';
import OurDrive from '../components/home/OurDrive';
import OurClients from '../components/home/OurClients';

const Home = () => {
	return (
		<AppLayout>
			<HomeHero />
			<LongCard />
			<OurClients />
			<OurDrive />
			<LatestBlog />
			<Subscribe />
		</AppLayout>
	);
};

export default Home;
