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
		title: 'We assess your team',
		description: 'We conduct preliminary tests using your Body Mass Index as the starting point. We then build a wholistic profile of your health and identify any pre-existing conditions or hereditary conditions like Diabetes and others.'
	},
	card: {
		title: 'Personalized Assessments',
		description: 'Using our algorith, we carry out a preliminary assessments to understand the state of your health and determine how best to serve you!'
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
