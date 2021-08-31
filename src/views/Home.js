import React from 'react';
import styled from 'styled-components';
import arrow from '../assets/arrow.png';
import flower1 from '../assets/img/flower_1.png';
import flower2 from '../assets/img/flower_2.png';
import fitness from '../assets/wellnessNav/fitness.svg';
import lifestyle from '../assets/wellnessNav/lifestyle.svg';
import nutrition from '../assets/wellnessNav/nutrition.svg';
import SEO from '../components/common/SEO';
import AboutUs from '../components/home/AboutUs';
import CarouselHero from '../components/home/CarouselHero';
import ChooseHealth from '../components/home/ChooseHealth';
import OurClients from '../components/home/OurClients';
import Pillars from '../components/home/Pillars';
import SimilarCard from '../components/home/SimilarCard';
import SquareImg from '../components/home/SquareImg';
import Testimonials from '../components/home/Testimonials';
import AppLayout from '../components/layouts/appLayout/AppLayout';
import Header from '../components/layouts/appLayout/header';
import { ScrollToTopOnMount } from '../views/Team';


const Wrapper = styled.div`
  .fit-bg {
    background-image: url("https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607309862/chooseLife/timecheck_gra6hk.png");
    height: 400px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
  }
`;
const toHealth = () => {
	const anchor = document.querySelector('#health');
	anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
const toLifestyle = () => {
	const anchor = document.querySelector('#lifestyle');
	anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
const toFitness = () => {
	const anchor = document.querySelector('#fitness');
	anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
const toNutrition = () => {
	const anchor = document.querySelector('#nutrition');
	anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
const toPillar = () => {
	const anchor = document.querySelector('#pillar');
	anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
const toAbout = () => {
	const anchor = document.querySelector('#aboutUs');
	anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

const Home = () => {
	return (
		<AppLayout
			header={<Header />}
			arrow={arrow}
			toPillar={toPillar}
			toAbout={toAbout}
		>
			<SEO title="Home" location={location.href} />
			<ScrollToTopOnMount />
			<CarouselHero toAbout={toAbout} />
			<AboutUs id="aboutUs" />
			<Pillars
				toHealth={toHealth}
				toLifestyle={toLifestyle}
				toFitness={toFitness}
				toNutrition={toNutrition}
				id="pillar"
			/>
			<ChooseHealth id="health" />
			<SimilarCard
				id="lifestyle"
				src={lifestyle}
				alt="lifestyle"
				subhead="Lifestyle"
				pad="pd-b"
				flowerRight={flower2}
				whichImg={
					<SquareImg
						bg="img2"
						border1="lightgray"
						border2="orange"
						caption="“It’s not stress that kills us, it is our reaction to it.”"
					/>
				}
				colorHead="orange"
				detail1="As Children, we played around; running, swinging, and jumping. As teenagers, our level of physical activity dropped drastically while the amount of food we ate increased. Now, as adults, our level of activity hits a very low point because of being stuck at a desk eight hours of the day and asleep for yet another eight hours at night."
			/>
			<SimilarCard
				id="fitness"
				src={fitness}
				alt="fitness"
				subhead="Fitness"
				order1="first-order"
				order2="second-order"
				pad="pd-b"
				mt="mt"
				colorSubHead="yellow"
				flowerLeft={flower1}
				smallsubhead="Fitness Plans"
				detail2="Using your data, we create and recommend fitness plans so that you can meet your physical and health goals."
				whichImg={
					<Wrapper>
						<div className="fit-bg"></div>
					</Wrapper>
				}
				colorHead="yellow"
				detail1="Our InBody technology allows us to evaluate your Fitness score, Metabolic Rate, Hydration Levels, Body Fat, Water Retention & Muscle Mass. This gives us logical insights into how your body is performing."
			/>

			<SimilarCard
				id="nutrition"
				src={nutrition}
				alt="nutrition"
				mt="mt"
				colorSubHead="green"
				subhead="Nutrition"
				smallsubhead="Recipes you know & love"
				detail2="We also offer healthy recipes for you or your chef to follow easily. Choose Life outlines the number of nutrients you need daily and offers recommendations on foods that are rich in those."
				detail3="We have reimagined how we can use our existing local recipes and prepare them in a way that is healthier and not harmful to your body."
				whichImg={<SquareImg bg="img3" border1="lightgray" border2="green" />}
				colorHead="green"
				detail1="At Choose Life, we understand that what goes into your body is the most important part of your health. That’s why we offer support through personalized nutrition plans and recipes on how to make healthier versions of meals you relish."
			/>
			<OurClients />
			<Testimonials />
		</AppLayout>
	);
};

export { toHealth, toAbout, toPillar, toLifestyle, toFitness, toNutrition };
export default Home;
