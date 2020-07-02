import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	h5 {
		font-size: 30px;
		line-height: 32px;
	}
	p {
		font-size: 12px;
		line-height: 16px;
		color: ${(props) => props.theme.color.text_02};
		margin: 1.4rem 0 2.3rem 0;
	}
	.blue {
		background-color: ${props => props.theme.color.ui_text_01};
	}
	.green {
		background-color: ${props => props.theme.color.ui_text_04};
	}
	.paper{
		padding: 3.7rem 2rem;
		text-align: left;
	}
`;

const PreliminaryCard = ({ backgroundColor, ...props  }) => {
	return (
		<Wrapper>
			<Paper className={`paper ${backgroundColor}`}>
				<img src={props.Image} alt="bodyMass" />
				<h5>{props.cardValue}</h5>
				<p>{props.cardInfo}</p>
				<Link to="">
					<Button value="View" theme={props.btnTheme}>
							View
					</Button>
				</Link>
			</Paper>

		</Wrapper>
	);
};

PreliminaryCard.propTypes = {
	Image: PropTypes.any,
	cardValue: PropTypes.any,
	cardInfo: PropTypes.any,
	btnTheme: PropTypes.any,
	backgroundColor: PropTypes.string.isRequired
};

export default PreliminaryCard;
