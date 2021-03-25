import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../common/Button';
import CircularProgressWithLabel from './CircularProgressWithLabel';

const Wrapper = styled.div`
	h5 {
		font-size: 3rem;
		line-height: 3.2rem;
	}
	p {
		font-weight: bold;
		line-height: 1.6rem;
		letter-spacing: 0.2px;
		color: #000b0a;
		margin-bottom: 1.6rem;
	}
	.blue {
		background: rgba(46, 196, 182, 0.03);
		border: 1px solid ${(props) => props.theme.color.brand_02};
	}
	.orange {
		background: rgba(243, 121, 32, 0.03);
		border: 1px solid ${(props) => props.theme.color.ui_08};
	}
	.yellow {
		background: rgba(255, 186, 8, 0.03);
		border: 1px solid ${(props) => props.theme.color.brand_03};
	}
	.green {
		background: rgba(141, 184, 56, 0.03);
		border: 1px solid ${(props) => props.theme.color.brand_04};
	}
	.paper {
		padding: 3.7rem 2rem;
		text-align: left;
		border-radius: 10px;
		width: auto;
		height: 20rem;
		min-width: 210px;
	}
	.bigFont {
	}
`;

const CircularProgressCard = ({
	fontSize,
	showButton,
	backgroundColor,
	progress,
	...props
}) => {
	return (
		<Wrapper>
			<Paper className={`paper ${backgroundColor}`}>
				<CircularProgressWithLabel value={progress} />
				<p className={`${fontSize}`}>{props.cardInfo}</p>
				{showButton && (
					<Link to={props.where || '/'}>
						<Button theme={props.btnTheme}>{props.btnValue}</Button>
					</Link>
				)}
			</Paper>
		</Wrapper>
	);
};

CircularProgressCard.defaultProps = {
	showButton: true,
};

CircularProgressCard.propTypes = {
	cardValue: PropTypes.any,
	cardInfo: PropTypes.any,
	fontSize: PropTypes.any,
	where: PropTypes.string,
	showButton: PropTypes.bool.isRequired,
	progress: PropTypes.number,
	btnTheme: PropTypes.any,
	btnValue: PropTypes.string,
	backgroundColor: PropTypes.string.isRequired,
};

export default CircularProgressCard;
