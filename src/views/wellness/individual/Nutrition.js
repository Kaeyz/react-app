import React from 'react';
import AppLayout from '../../../components/layouts/appLayout/AppLayout';
import Subscribe from '../../../components/subscribe/Subscribe';
import LatestBlog from '../../../components/blog/LatestBlog';
import MainBanner from '../../../components/wellness/individual/MainBanner';
import TeamCard from '../../../components/wellness/individual/TeamCard';
import Recommendations from '../../../components/wellness/individual/Recommendations';
import DoYouKnow from '../../../components/wellness/individual/DoYouKnow';
import HealthTrackCard from '../../../components/wellness/individual/HealthTrackCard';
import undraw_breakfast from '../../../assets/undraw_breakfast.png';
import group_129 from '../../../assets/group_129.png';
import undraw_diet from '../../../assets/undraw_diet.png';


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

const healthTrackCard = {
	title: 'Constant Updates',
	description: 'At Choose Life, we understand that what goes into your body is the most important part of your health. This is why we offer support through personalized nutrition plans and recipes on how to make healthier versions of the foods you already love.',
	img: group_129,
};

const doYouKnow = {
	description: 'Running is good for you. People who run 12-18 miles a week have a stronger immune system and can increase their bone mineral density.',
	img: undraw_breakfast
};


const recommendation= {
	background: {
		right: false,
		left: 'pink',
		bottomRight: false,
		bottomLeft: false,
	},
	title: 'Recipes you know and love',
	description: 'We have reimagned how we can use our existing local recipes and prepare them in a way that is healthier and not harmful to your body.',
	img: undraw_diet,
	icon: false,
	button: 'yellow'
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
			<Recommendations data={recommendation} />
			<HealthTrackCard data={healthTrackCard} />
			<DoYouKnow data={doYouKnow}/>
			<LatestBlog />
			<Subscribe />
		</AppLayout>
	);
};

export default Nutrition;
