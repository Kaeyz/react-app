import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '../../common/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DashedLoader from '../../../components/dashboard/assessment/DashedLoader';

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
	.white {
		background-color: ${props => props.theme.color.text_03};
	}
	.paper{
		padding: 3.7rem 2rem;
		text-align: left;
		width: 23.6rem;
		height: 28.2rem;
	}
	.bigFont{
		font-size: 1.4rem;
	}
`;

const DashedProgressCard = ({ fontSize, backgroundColor, ...props  }) => {

	return (
		<Wrapper>

			<Paper className={`paper ${backgroundColor}`}>
				<DashedLoader />
				<h5>{props.cardValue}</h5>
				<p className={`${fontSize}`}>{props.cardInfo}</p>
				<Link to={props.where}>
					<Button theme={props.btnTheme}>
						{props.btnValue}
					</Button>
				</Link>
			</Paper>

		</Wrapper>
	);
};

DashedProgressCard.propTypes = {
	Image: PropTypes.any,
	cardValue: PropTypes.any,
	cardInfo: PropTypes.any,
	fontSize: PropTypes.any,
	where: PropTypes.string,
	btnTheme: PropTypes.any,
	btnValue: PropTypes.string,
	backgroundColor: PropTypes.string.isRequired
};

export default DashedProgressCard;