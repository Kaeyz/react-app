import React from 'react';
import AppLayout from '../../../components/layouts/appLayout/AppLayout';
import Subscribe from '../../../components/subscribe/Subscribe';
import LatestBlog from '../../../components/blog/LatestBlog';
import MainBanner from '../../../components/wellness/individual/MainBanner';
import TeamCard from '../../../components/wellness/individual/TeamCard';
import Recommendations from '../../../components/wellness/individual/Recommendations';
import DoYouKnow from '../../../components/wellness/individual/DoYouKnow';
import HealthTrackCard from '../../../components/wellness/individual/HealthTrackCard';
import checkup_up from '../../../assets/wellnessNav/check-up-dentist-doctors.png';
import undraw_personal_trainer from '../../../assets/undraw_personal_trainer.png';
import bicycle from '../../../assets/bicycle.png';


const teamCard = {
	details: {
		title: 'We assess your team',
		description: 'We use the calorie calculator in assessing you for weight goals. Based on your health assessment, we help you set healthy, sustainable weight gain or weight loss goals by measuring your calorie intake.'
	},
	card: {
		img: checkup_up,
		title: 'Fitness Plans',
		description: 'Through an analysis of your age, activity levels, and health, Choose Life recommends fitness routines to keep you in the best shape possible.'
	}
};

const healthTrackCard = {
	title: 'Stay Fit',
	description: 'Our technology allows us to accurately evaluate your Fitness Score, Metabolic Rate, Hydration Levels, Body Fat, Water Retention & Muscle Mass. This gives us clear insight into how your body is performing.',
	img: bicycle,
};

const doYouKnow = {
	description: 'Running is good for you. People who run 12-18 miles a week have a stronger immune system and can increase their bone mineral density.',
	img: undraw_personal_trainer
};

const Fitness = () => {
	return (
		<AppLayout>
			<MainBanner page="fitness"/>
			<TeamCard
				page="fitness"
				card={teamCard.card}
				details={teamCard.details}
				tryTest={true}
			/>
			<Recommendations />
			<HealthTrackCard data={healthTrackCard} />
			<DoYouKnow data={doYouKnow}/>
			<LatestBlog />
			<Subscribe />
		</AppLayout>
	);
};

export default Fitness;
