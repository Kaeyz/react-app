import React from 'react';
import AppLayout from '../../../components/layouts/appLayout/AppLayout';
import Subscribe from '../../../components/subscribe/Subscribe';
import LatestBlog from '../../../components/blog/LatestBlog';
import MainBanner from '../../../components/wellness/individual/MainBanner';
import TeamCard from '../../../components/wellness/individual/TeamCard';
import Recommendations from '../../../components/wellness/individual/Recommendations';
import DoYouKnow from '../../../components/wellness/individual/DoYouKnow';
import HealthTrackCard from '../../../components/wellness/individual/HealthTrackCard';
import nutrition_rs from '../../../assets/nutrition-rs.png';
import undraw_medicine from '../../../assets/undraw_medicine.svg';
import Mask_group from '../../../assets/Mask_group.png';


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

const healthTrackCard = {
	title: 'We track your health',
	description: 'Using InBody’s Body Composition History tracks a client’s progress throughout their program and ensures their BMR and nutrition program is being balanced to reflect their muscle growth. By monitoring weight, skeletal muscle mass, and percent body fat, client’s will be able to track and maintain their ideal body composition.',
	img: nutrition_rs,
};

const doYouKnow = {
	description: 'Running is good for you. People who run 12-18 miles a week have a stronger immune system and can increase their bone mineral density.',
	img: undraw_medicine
};

const recommendation= {
	background: {
		right: true,
		left: 'none',
		bottomRight: false,
		bottomLeft: false,
	},
	title: 'We make recommendations',
	description: 'Having identified the pre-existing conditions and possible physical and mental health risks, we make recommendations and help you create health goals on what can be done to improve your health.',
	img: Mask_group,
	icon: true,
	button: 'green'
};

const Health = () => {
	return (
		<AppLayout>
			<MainBanner page="health"/>
			<TeamCard
				page="health"
				card={teamCard.card}
				details={teamCard.details}
			/>
			<Recommendations data={recommendation}/>
			<HealthTrackCard data={healthTrackCard} />
			<DoYouKnow data={doYouKnow}/>
			<LatestBlog />
			<Subscribe />
		</AppLayout>
	);
};


export default Health;