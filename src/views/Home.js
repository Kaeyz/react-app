/*eslint-disable */
import React from "react";
import CarouselHero from "../components/home/CarouselHero";
import AboutUs from "../components/home/AboutUs";
import OurClients from "../components/home/OurClients";
import SimilarCard from "../components/home/SimilarCard";
import ChooseHealth from "../components/home/ChooseHealth";
import Pillars from "../components/home/Pillars";
import Testimonials from "../components/home/Testimonials";
import AppLayout from "../components/layouts/appLayout/AppLayout";
import lifestyle from "../assets/wellnessNav/lifestyle.svg";
import fitness from "../assets/wellnessNav/fitness.svg";
import nutrition from "../assets/wellnessNav/nutrition.svg";
import SquareImg from "../components/home/SquareImg";
import flower2 from '../assets/img/flower_2.png';
import flower1 from '../assets/img/flower_1.png';
import arrow from '../assets/arrow.png';
import Header from '../components/layouts/appLayout/header';
import img4 from "../assets/timecheck.png";
import styled from "styled-components";

const Wrapper = styled.div`
.fit-bg{
	background-image: url(${img4});
	height: 400px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
	background-size: cover;
	border-radius: 10px;
  }
  
`
const Home = () => {
	const toHealth = (e) => {
		const anchor = document.querySelector('#health')
		anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}
	const toLifestyle = (e) => {
		const anchor = document.querySelector('#lifestyle')
		anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}
	const toFitness = (e) => {
		const anchor = document.querySelector('#fitness')
		anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}
	const toNutrition = (e) => {
		const anchor = document.querySelector('#nutrition')
		anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}
	const toPillar = (e) => {
		const anchor = document.querySelector('#pillar')
		anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}
	const toAbout = (e) => {
		const anchor = document.querySelector('#aboutUs')
		anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}
  return (
    <AppLayout header={<Header />} arrow={arrow} toPillar={toPillar} toAbout={toAbout}>
      <CarouselHero />
      <AboutUs id="aboutUs"/>
      <Pillars toHealth={toHealth} toLifestyle={toLifestyle} toFitness={toFitness} toNutrition={toNutrition} id="pillar"/>
      <ChooseHealth id="health"/>
      <SimilarCard
	  id='lifestyle'
        src={lifestyle}
        alt="lifestyle"
		subhead="Lifestyle"
		pad="pd-b"
		flowerRight={flower2}
		whichImg={ <SquareImg
            bg="img2"
            border1="lightgray"
            border2="orange"
            caption="“It’s not stress that kills us, it is our reaction to it.”"
          />}
		colorHead="orange"
        detail1="As Children, we played around running, swinging and jumping. As teenagers, our level of physical activity began to drop 
drastically while the amount of food we ate increased.
As adults, our level of activity hits a very low point as a result of 
being seated at a desk, eight hours of the day while asleep
Another eight hours"
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
		detail2="Using all your date, we create recommended fitness plans 
		to ensure you meet your physical and health goals."
		whichImg={ <Wrapper>
			<div className="fit-bg">

</div>
		</Wrapper>}
		colorHead="yellow"
        detail1="Out technology allows unto accurately evaluate your fitness 
		Score, Metabolic Rate, Hydration Levels, Body Fat, Water 
		Retention & Muscle Mass.
		This gives us clear insight into how your body is performing"
      />

      <SimilarCard
	  id='nutrition'
        src={nutrition}
		alt="nutrition"
		mt="mt"
		colorSubHead="green"
		subhead="Nutrition"
				smallsubhead="Recipes you know & love"
		detail2="We also offer healthy recipes for yourself or your chef to follow easily.
		Choose Life outlines the amount of nutrients you need daily and offers
		Recommendations on foods that are rich in those
		"
		detail3="We have reimagined how we can use our existing local recipes 
		and prepare them in a way that is healthier and not harmful to 
		your body"
		whichImg={ <SquareImg
            bg="img3"
            border1="lightgray"
            border2="green"
          />}
		colorHead="green"
        detail1="At Choose Life, we understand that what goes into your body
		Is the most important part of your health.	
		This is why we offer support through personalized nutrition 
		plans and recipe on how to make healthier versions of the 
		Foods you already love. "
      />
	  <OurClients />
	  <Testimonials />
	      </AppLayout>
  );
};

export default Home;
