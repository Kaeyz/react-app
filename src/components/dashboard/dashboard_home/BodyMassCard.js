/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { getBmi } from '../../../store/actions/bmiActions';


const Wrapper = styled.div`
padding-bottom: 4rem;
	.grid-container {
		left: 300px;
		padding: 3rem 0rem;
		top: 425px;
		background-color: ${(props) => props.theme.color.text_10};
		border: 1px solid ${(props) => props.theme.color.ui_12};
		border-radius: 10px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			padding: 3rem;
		}
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			padding: 2rem;
		}
		.sub-head {
			font-weight: bold;
			font-size: 1.4rem;
			line-height: 1.6rem;
			letter-spacing: -0.2px;
			color: ${(props) => props.theme.color.ui_05};
		}
		.gridy {
			display: flex;
			@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
				display: block;
			}
			.pad {
				padding: 0 4rem;
				@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
					padding: 0;
				}
			}
		}
		.grid {
			display: grid;
			padding-top: 3rem;
			grid-gap: 4rem;
			grid-template-columns: 1fr 1fr;

			.text {
				font-weight: 300;
				font-size: 1.4rem;
				line-height: 2.2rem;
				color: ${(props) => props.theme.color.ui_05};
				@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
					font-size: 1.3rem;
				}
			}
			.bold {
				font-weight: bold;
			}
		}
	}

	#pt {
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			padding-top: 4rem;
		}
	}
	hr {
		background-color: ${(props) => props.theme.color.ui_text_07};
		margin: 0;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			display: none;
		}
	}
`;

function BodyMassCard({height, weight, BMI, getBmi, isLoading}) {

	React.useEffect(() => {
		getBmi();
	}, [getBmi]);

	const string = 'Less than 18.5 = Underweight; Between 18.5 - 24.9 = Healthy Weight; Between 25 - 29.9 = Overweight; Over 30 = Obese';

	const convertBmiString = bmiString => {
		const response = [];
		bmiString.split(';').forEach(bmi => {
			const bmiArray = bmi.split('=');
			return response.push({key: bmiArray[0].trim(), value: bmiArray[1].trim()});
		});
		return response;
	};


	const ratingMessage = (convertBmiString(string));


	return (
		<Wrapper>
			<Paper className="grid-container">
				<div className="gridy">
					<div className="pad">
						<h1 className="sub-head">BMI Details</h1>
						<div className="grid">
							<p className="light text">Height (CM)</p>
							<h2 className="bold text">{height}</h2>
						</div>
						<div className="grid">
							<p className="light text">Weight (Kg)</p>
							<h2 className="bold text">{weight}</h2>
						</div>
						<div className="grid">
							<p className="light text">Body Mass Index (BMI)</p>
							<h2 className="bold text">{ !isLoading && BMI.bmi }</h2>
						</div>
						<div className="grid">
							<p className="light text">BMI Result</p>
							<h2 className="bold text">{ !isLoading && BMI.rating }</h2>
						</div>
					</div>
					<hr orientation="vertical" flexItem />

					<div id="pt" className="pad">
						<h1 className="sub-head">What does this result mean?</h1>
						{ratingMessage.map( item => (
							<div className="grid">
								<p className="light text">{item.key}</p>
								<p className="light text">{item.value}</p>
							</div>
						))}
					</div>
				</div>
			</Paper>
		</Wrapper>
	);
}

BodyMassCard.propTypes = {
	height: PropTypes.number.isRequired,
	weight: PropTypes.number.isRequired,
	getBmi: PropTypes.func.isRequired,
	BMI: PropTypes.object.isRequired,
	isLoading:PropTypes.bool.isRequired,

};

const mapStateToProps = state => {
	const height = state.user.user.height;
	const weight = state.user.user.weight;
	const { BMI, isLoading } = state.bmi;

	return { height, weight, BMI, isLoading };
};

export default connect(mapStateToProps, {getBmi})(BodyMassCard);

