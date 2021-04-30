import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import fitness from '../../assets/fitness.png';
import health from '../../assets/health.png';
import lifestyle from '../../assets/lifestyle.png';
import nutrition from '../../assets/nutrition.png';

const Wrapper = styled.div`
	position: relative;
	text-align: center;
  h3 {
    font-size: 3.2rem;
  }
  p {
    font-size: 2rem;
  }
	color: ${(props) => props.theme.color.ui_01};
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		img {
			margin-bottom: 5px;
		}
	}
	.grid .link {
		height: 300px;
		max-height: 350px;
		display: flex;
		color: ${(props) => props.theme.color.ui_01};
		flex-direction: column;
		justify-content: center;
		align-items: center;
    cursor: pointer;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			height: 250px;
		}
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			height: 200px;
		}
	}
	.grid .link img {
		height: 130px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			height: 85px;
		}
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			width: 45px;
			height: 60px;
		}
	}
	.grid .link p {
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		}
	}
	h3 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		line-height: 5rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			line-height: 3.5rem;
			width: 100%;
		}
	}
	p {
	}
	.lemon {
		background-color: ${(props) => props.theme.color.ui_10};
	}
	.orange {
		background-color: ${(props) => props.theme.color.brand_01};
	}
	.blue {
		background-color: ${(props) => props.theme.color.brand_02};
	}
	.yellow {
		background-color: ${(props) => props.theme.color.text_08};
	}
`;
function Pillars({ toHealth, toLifestyle, toFitness, toNutrition, id }) {
	return (
		<Wrapper id={id}>
			<h3>
				Choose Life
				<br />
				Pillars
			</h3>
			<div className="grid">
				<div className="blue link" onClick={toHealth}>
					<img src={health} alt="health" />
					<p>Health</p>
				</div>
				<div className="yellow link" onClick={toLifestyle}>
					<img src={lifestyle} alt="lifestyle" />
					<p>Lifestyle</p>
				</div>
			</div>
			<div className="grid">
				<div className="orange link" onClick={toFitness}>
					<img src={fitness} alt="fitness" />
					<p>Fitness</p>
				</div>
				<div className="lemon link" onClick={toNutrition}>
					<img src={nutrition} alt="nutrition" />
					<p>Nutrition</p>
				</div>
			</div>
		</Wrapper>
	);
}

Pillars.propTypes = {
	toHealth: PropTypes.func,
	toLifestyle: PropTypes.func,
	toFitness: PropTypes.func,
	toNutrition: PropTypes.func,
	id: PropTypes.string,
};

export default Pillars;
