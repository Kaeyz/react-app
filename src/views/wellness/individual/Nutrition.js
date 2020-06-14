import React from 'react';
import AppLayout from '../../../components/layouts/appLayout/AppLayout';
import Subscribe from '../../../components/subscribe/Subscribe';
import LatestBlog from '../../../components/blog/LatestBlog';
import MainBanner from '../../../components/wellness/individual/MainBanner';
import TeamCard from '../../../components/wellness/individual/TeamCard';
import Recommendations from '../../../components/wellness/individual/Recommendations';
import DoYouKnow from '../../../components/wellness/individual/DoYouKnow';
import HealthTrackCard from '../../../components/wellness/individual/HealthTrackCard';

const teamCard = {
	details: {
		title: 'Personalized Meal Plans',
		description: 'Through personalized meal plans on food and diet, we give you a detailed look on the foods to eat as well as taking your health and location into consideration.'
	},
	card: {
		title: 'Meal Plans',
		description: 'Through an analysis of your age, activity levels, and health, Choose Life recommends fitness routines to keep you in the best shape possible.'
	}
};

const Nutrition = () => {
	return (
		<AppLayout>
			<MainBanner page="nutrition"/>
			<TeamCard
				page="nutrition"
				card={teamCard.card}
				details={teamCard.details}
			/>
			<Recommendations />
			<HealthTrackCard />
			<DoYouKnow />
			<LatestBlog />
			<Subscribe />
		</AppLayout>
	);
};

export default Nutrition;
