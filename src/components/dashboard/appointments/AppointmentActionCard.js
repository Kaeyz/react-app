import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import icon from '../../../assets/money.svg';

const Wrapper = styled.div`
	width: 100%;
	.uglyCard {
		padding: 3rem;
		border-radius: 8px;
		box-shadow: none;
		min-height: 170px;
		&:hover {
			transform: scale(0.95);
			transition: 0.3s;
		}
	}
	.pink {
		background-color: #fff1ed;
		border: 1px solid #f37920;
	}
	.green {
		background-color: #f3f6eb;
		border: 1px solid #9ecd43;
	}
	.text {
		h1 {
			/* font-family: Sofia; */
			font-weight: bold;
			line-height: 24px;
			padding-bottom: 1rem;
			letter-spacing: -0.2px;
			color: #000b0a;
		}
		p {
			font-weight: 300;
			color: #0a2523;
		}
	}
`;

function AppointmentActionCard({ title, details, cardTheme }) {
	return (
		<Wrapper>
			<Paper className={`uglyCard flex ${cardTheme}`}>
				<div className="text">
					<h1 className="title">{title}</h1>
					<p className="details">{details}</p>
				</div>

				<img src={icon} alt="icon" />
			</Paper>
		</Wrapper>
	);
}

AppointmentActionCard.propTypes = {
	title: PropTypes.string.isRequired,
	details: PropTypes.string.isRequired,
	cardTheme: PropTypes.string.isRequired,
};

export default AppointmentActionCard;
