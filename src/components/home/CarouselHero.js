/*eslint-disable */
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import triangle from '../../assets/polyarrow.png';

const Wrap = styled.div`
	.Carousel-prev-13 {
		left: 20px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			left: 0;
		}
	}
	.Carousel-next-12 {
		right: 13px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			right: 0;
		}
	}
	.Carousel-button-8 {
		color: ${(props) => props.theme.color.text_05};
	}
	.Carousel-buttonVisible-10 {
		background-color: rgba(255, 255, 255, 0.95);
	}
`;
const Wrapper = styled.div`
	position: relative;
	.hero-image {
		height: 700px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}
	.hero-text {
		text-align: center;
		position: absolute;
		top: 54%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: ${(props) => props.theme.color.text_03};
	}
	.hero-text h2 {
		line-height: 5rem;
		font-size: 4.5rem;
		margin-bottom: 15px;
		font-weight: 100;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			line-height: 4.8rem;
			font-size: 4rem;
		}
	}
	.hero-text button {
		padding: 14px 40px;
		border-radius: 30px;
		outline: none;
		border: none;
		background-color: rgba(255, 255, 255, 0.3);
		font-size: 2rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			padding: 10px 30px;
			font-size: 1.5rem;
		}
		.link {
			color: ${(props) => props.theme.color.text_03};
			&:hover {
				text-decoration: underline;
				transition: 0.2s;
			}
		}
	}
	.triangle {
		width: 0;
		height: 0;
		margin: auto;
		border-left: 14px solid transparent;
		border-right: 14px solid transparent;
		border-top: 23px solid rgba(255, 255, 255, 0.6);
		position: absolute;
		bottom: 6px;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

function CarouselHero(props) {
	var items = [
		{
			name:
				'Wellness is a gift you give yourself. So start your own health and wellness journey on CHOOSELIFE.',
			bgImg:
				'https://res.cloudinary.com/dsqnyciqg/image/upload/v1607309874/chooseLife/shalom-mwenesi_wbmcyn.png',
		},
		{
			name:
				'Redesign your life by picking yourself up everyday and choosing life.Start your health & wellness journey here.',
			bgImg:
				'https://res.cloudinary.com/dsqnyciqg/image/upload/v1607309853/chooseLife/FatherSon_aybzjf.png',
		},
		{
			name:
				'Wellness is not just something you gift yourself, it is a way to show you care for your loved one.Start your health & wellness journey here.',
			bgImg:
				'https://res.cloudinary.com/dsqnyciqg/image/upload/v1607309873/chooseLife/family_satzio.png',
		},
	];

	return (
		<Wrap>
			<Carousel
				autoPlay={true}
				timeout={5000}
				indicators={false}
				navButtonsAlwaysVisible={true}
				animation="fade"
			>
				{items.map((item, i) => (
					<Item key={i} item={item} />
				))}
			</Carousel>
		</Wrap>
	);
}

function Item(props) {
	return (
		<Wrapper>
			<div
				className="hero-image"
				style={{
					backgroundImage: ` url(${props.item.bgImg})`,
				}}
			>
				<div className="hero-text">
					<h2>{props.item.name}</h2>
					<button>
						<Link className="link" to="/onboarding/company">
							Get Started
						</Link>
					</button>
				</div>
				<img src={triangle} alt="" className="triangle" />
			</div>
		</Wrapper>
	);
}

export default CarouselHero;
