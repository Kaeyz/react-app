import React from 'react';
import Container from '../../common/Container';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import flower1 from '../../../assets/img/flower_1.png';
import flower2 from '../../../assets/img/flower_2.png';
import CircleCard from '../../common/CircleCard';
import PropTypes from 'prop-types';
import health from '../../../assets/wellnessNav/health.png';
import healthIsActive from '../../../assets/wellnessNav/healthIsActive.png';
import fitness from '../../../assets/wellnessNav/fitness.png';
import fitnessIsActive from '../../../assets/wellnessNav/fitnessIsActive.png';
import lifestyle from '../../../assets/wellnessNav/lifestyle.png';
import lifestyleIsActive from '../../../assets/wellnessNav/lifestyleIsActive.png';
import nutrition from '../../../assets/wellnessNav/nutrition.png';
import nutritionIsActive from '../../../assets/wellnessNav/nutritionIsActive.png';

const Wrapper = styled.div`
		height: max-content;
		width: 100%;
		display: flex;
		.flower1 {
   	 background-image: url(${flower1});
			height: 50%;
			width: 100%;
			background-repeat: no-repeat;
			background-position: center left;
			background-size: 10%;
		}
  .flower2 {
		height: 100%;
		width: 100%;
    background-image: url(${flower2});
		background-repeat: no-repeat;
		background-position: center right;
		background-size: 15%;
  }
	.top_section {
		display: flex;
		justify-content: space-between;
	}
	.title {
		max-width: 48%;
		display: flex;
		align-items: center;

	}
	.bigText {
		font-size: 4.51vw;
		line-height: 5vw;
	}
	.nav_section {
		display: grid;
		grid-template-columns: max-content max-content max-content max-content;
		grid-gap: 2rem;
		align-items: center;
	}
	.nav_link {
		text-decoration: none;
		display: grid;
		justify-items: center;
		align-content: center;
		grid-gap: 0.5rem;
		color: inherit;
	}
	.nav_icon {
		height: 4.5rem;
		object-fit: contain;
	}

`;

function MainBanner({page}) {
	return (
		<Wrapper>
			<div className='flower1'>
				<div className='flower2'>
					<Container>
						<div className="top_section">
							<div className="title">
								<h1 className="bigText">See how well a Wellness plan can works for you</h1>
							</div>
							<CircleCard />
						</div>
						<div className='nav_section'>
							<Link className="nav_link" to="/wellness/individual/health">
								<img src={page === 'health' ? healthIsActive : health } alt={page} className="nav_icon" />
								<h5 className="nav_text">HEALTH</h5>
							</Link>
							<Link className="nav_link" to="/wellness/individual/fitness">
								<img src={page === 'fitness' ? fitnessIsActive : fitness} alt={page} className="nav_icon"/>
								<h5 className="nav_text">FITNESS</h5>
							</Link>
							<Link className="nav_link" to="/wellness/individual/lifestyle">
								<img src={page === 'lifestyle' ? lifestyleIsActive : lifestyle} alt={page} className="nav_icon"/>
								<h5 className="nav_text">LIFESTYLE</h5>
							</Link>
							<Link className="nav_link" to="/wellness/individual/nutrition">
								<img src={page === 'nutrition' ? nutritionIsActive : nutrition} alt={page} className="nav_icon" />
								<h5 className="nav_text">NUTRITION</h5>
							</Link>
						</div>
					</Container>
				</div>
			</div>
		</Wrapper>
	);
}

MainBanner.propTypes = {
	page: PropTypes.string.isRequired,
};

export default MainBanner;

