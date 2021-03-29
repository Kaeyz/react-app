import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../common/Button';

const Wrapper = styled.div`
	.orange {
		background: rgba(243, 121, 32, 0.03);
		border: 1px solid ${(props) => props.theme.color.ui_08};
	}
	.yellow {
		background: rgba(255, 198, 36, 0.06);
		border: 1px solid ${(props) => props.theme.color.ui_11};
	}
	.green {
		background: rgba(141, 184, 56, 0.03);
		border: 1px solid ${(props) => props.theme.color.brand_04};
	}
	.paper {
		flex-direction: column;
		align-items: start;
		height: 300px;
		position: relative;
		padding: 3rem;
		/* padding-top: 3rem; */
		overflow: hidden;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			display: block;
		}
		img {
			right: 24px;
			bottom: -11px;
			position: absolute;
		}
	}
	h2 {
		font-size: 1.5rem;
		line-height: 1.5rem;
		font-weight: bold;
		letter-spacing: 0.2px;
		color: ${(props) => props.theme.color.ui_05};
	}
	p {
		font-weight: 300;
		letter-spacing: 0.2px;
		color: ${(props) => props.theme.color.ui_05};
		margin: 2rem 0 2rem 0;
		height: 100px;
	}
`;

const PreliminaryCard = ({
	fontSize,
	backgroundColor,
	cardInfo,
	where,
	btnTheme,
	btnValue,
	image,
	details,
}) => {
	return (
		<Wrapper>
			<Paper className={`paper ${backgroundColor}`}>
				<h2 className={`${classNames(fontSize)}`}>{cardInfo}</h2>
				<p>{details}</p>
				{btnValue !== 'Coming Soon' && (
					<Link to={where || '/'}>
						<Button theme={btnTheme} style={{borderRadius: '4px'}}>{btnValue}</Button>
					</Link>
				)}
				<img src={image} alt="Flower" />
			</Paper>
		</Wrapper>
	);
};

PreliminaryCard.propTypes = {
	image: PropTypes.any,
	cardValue: PropTypes.any,
	cardInfo: PropTypes.any,
	fontSize: PropTypes.any,
	where: PropTypes.string,
	btnTheme: PropTypes.any,
	btnValue: PropTypes.string,
	backgroundColor: PropTypes.string.isRequired,
	details: PropTypes.string.isRequired,
};

export default PreliminaryCard;
