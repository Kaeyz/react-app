import React from 'react';
import AppLayout from '../../../components/layouts/appLayout/AppLayout';
import Subscribe from '../../../components/subscribe/Subscribe';
import LatestBlog from '../../../components/blog/LatestBlog';
import MainBanner from '../../../components/wellness/individual/MainBanner';
import TeamCard from '../../../components/wellness/individual/TeamCard';
import Recommendations from '../../../components/wellness/individual/Recommendations';
import DoYouKnow from '../../../components/wellness/individual/DoYouKnow';
import HealthTrackCard from '../../../components/wellness/individual/HealthTrackCard';

const Health = () => {
	return (
		<AppLayout>
			<MainBanner page="lifestyle"/>
			<TeamCard />
			<Recommendations />
			<HealthTrackCard />
			<DoYouKnow />
			<LatestBlog />
			<Subscribe />
		</AppLayout>
	);
};

export default Health;
