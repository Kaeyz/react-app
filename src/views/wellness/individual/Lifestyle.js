import React from 'react';
import AppLayout from '../../../components/layouts/appLayout/AppLayout';
import Subscribe from '../../../components/subscribe/Subscribe';
// import LatestBlog from '../../../components/blog/LatestBlog';
import MainBanner from '../../../components/wellness/individual/MainBanner';
import TeamCard from '../../../components/wellness/individual/TeamCard';
import Recommendations from '../../../components/wellness/individual/Recommendations';
import DoYouKnow from '../../../components/wellness/individual/DoYouKnow';
import HealthTrackCard from '../../../components/wellness/individual/HealthTrackCard';
import undraw_reading_time from '../../../assets/undraw_reading_time.svg';
import undraw_festivities from '../../../assets/undraw_festivities.svg';
import undraw_through_the_park from '../../../assets/undraw_through_the_park.svg';


const teamCard = {
	details: {
		title: 'Mental Health',
		description: 'We use the calorie calculator in assessing you for weight goals. Based on your health assessment, we help you set healthy, sustainable weight gain or weight loss goals by measuring your calorie intake.'
	},
	card: {
		title: 'Fitness Plans',
		description: 'Through an analysis of your age, activity levels, and health, Choose Life recommends fitness routines to keep you in the best shape possible.'
	}
};

const healthTrackCard = {
	title: 'Relaxation & Sleep',
	description: 'Using InBody’s Body Composition History tracks a client’s progress throughout their program and ensures their BMR and nutrition program is being balanced to reflect their muscle growth. By monitoring weight, skeletal muscle mass, and percent body fat, client’s will be able to track and maintain their ideal body composition.',
	img: undraw_festivities,
};

const doYouKnow = {
	description: 'Running is good for you. People who run 12-18 miles a week have a stronger immune system and can increase their bone mineral density.',
	img: undraw_reading_time
};

const recommendation= {
	background: {
		right: false,
		left: 'green',
		bottomRight: false,
		bottomLeft: false,
	},
	title: 'Stress Test',
	description: 'Having identified the pre-existing conditions and possible physical and mental health risks, we make recommendations and help you create health goals on what can be done to improve your health.',
	img: undraw_through_the_park,
	icon: false,
	button: 'yellow'
};

const Lifestyle = () => {
	return (
		<AppLayout>
			<MainBanner page="lifestyle"/>
			<TeamCard
				page="lifestyle"
				card={teamCard.card}
				details={teamCard.details}
			/>
			<Recommendations data={recommendation}/>
			<HealthTrackCard data={healthTrackCard} />
			<DoYouKnow data={doYouKnow}/>
			{/* <LatestBlog /> */}
			<Subscribe />
		</AppLayout>
	);
};

export default Lifestyle;
