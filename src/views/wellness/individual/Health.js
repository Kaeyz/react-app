import React from 'react';
import AppLayout from '../../../components/layouts/appLayout/AppLayout';
import Subscribe from '../../../components/subscribe/Subscribe';
import LatestBlog from '../../../components/blog/LatestBlog';
import MainBanner from '../../../components/wellness/individual/MainBanner';
import TeamCard from '../../../components/wellness/individual/TeamCard';

const Health = () => {
	return (
		<AppLayout>
			<MainBanner page="lifestyle"/>
			<TeamCard />
			<p>Recommendations</p>
			<p>HealthTrackCard</p>
			<p>DoYouKnow</p>
			<LatestBlog />
			<Subscribe />
		</AppLayout>
	);
};

export default Health;
