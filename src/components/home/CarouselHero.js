import PropTypes from 'prop-types';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import triangle from '../../assets/polyarrow.png';

const Wrap = styled.div`
	background-color: #474848;
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
		line-height: 4rem;
		margin-bottom: 15px;
		font-weight: 100;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			line-height: 3.8rem;
		}
	}
	.hero-text button {
		/* font-family: Avenir; */
		padding: 14px 30px;
		border-radius: 20px;
		outline: none;
		border: none;
		background-color: rgba(255, 255, 255, 0.3);
		cursor: pointer;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			padding: 10px 30px;
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
		/* transform-origin: center; */
		transform: translate(-50%, -50%);
		&:hover {
			transform: translate(-50%, -50%) rotate(180deg) scale(2);
			transform-origin: center;
			transition: transform 2s;
			cursor: pointer;
		}
	}
`;

function CarouselHero(props) {
	const items = [
		{
			name:
				'Wellness is a gift you give yourself. Start your own health and wellness journey on CHOOSELIFE.',
			bgImg:
				'https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto,q_auto,w_auto/v1607309874/chooseLife/shalom-mwenesi_wbmcyn',
		},
		{
			name:
				'Redesign your life by picking yourself up everyday and choosing life.Start your health & wellness journey here.',
			bgImg:
				'https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto,q_auto,w_auto/v1607309853/chooseLife/FatherSon_aybzjf.png',
		},
		{
			name:
				'Wellness is not just something you gift yourself, it is a way to show you care for your loved one.Start your health & wellness journey here.',
			bgImg:
				'https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto,q_auto,w_auto/v1607309873/chooseLife/family_satzio.png',
		},
	];

	return (
		<Wrap>
			<Carousel
				interval={5000}
				autoPlay={true}
				timeout={{ appear: 1000, enter: 0, exit: 1000 }}
				indicators={false}
				navButtonsAlwaysVisible={true}
				animation="fade"
			>
				{items.map((item, i) => (
					<Item key={i} item={item} toAbout={props.toAbout} />
				))}
			</Carousel>
		</Wrap>
	);
}

CarouselHero.propTypes = {
	toAbout: PropTypes.any
};

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
					<Link className="link" to="/onboarding/company">
						<button>Get Started</button>
					</Link>
				</div>
				<img
					style={{}}
					onClick={props.toAbout}
					src={triangle}
					alt="move to about section"
					className="triangle"
					title="click to move to the next section"
				/>
			</div>
		</Wrapper>
	);
}

Item.propTypes = {
	item: PropTypes.shape({
		bgImg: PropTypes.any,
		name: PropTypes.any
	}),
	toAbout: PropTypes.any
};

export default CarouselHero;
