import React from 'react';
import AppLayout from '../../../components/layouts/appLayout/AppLayout';
import Subscribe from '../../../components/subscribe/Subscribe';
import LatestBlog from '../../../components/blog/LatestBlog';
import MainBanner from '../../../components/wellness/individual/MainBanner';
import TeamCard from '../../../components/wellness/individual/TeamCard';
import Recommendations from '../../../components/wellness/individual/Recommendations';
import DoYouKnow from '../../../components/wellness/individual/DoYouKnow';
import HealthTrackCard from '../../../components/wellness/individual/HealthTrackCard';

const Nutrition = () => {
	return (
		<AppLayout>
			<MainBanner page="nutrition"/>
			<TeamCard />
			<Recommendations />
			<HealthTrackCard />
			<DoYouKnow />
			<LatestBlog />
			<Subscribe />
		</AppLayout>
	);
};

export default Nutrition;
