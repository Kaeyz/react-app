import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import ladder from '../../assets/leaderLadder.svg';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
	.heading {
		display: flex;
		justify-content: space-between;
		margin-bottom: 4.3rem;
		padding: 0 2px;
		h1 {
			font-size: 18px;
			line-height: 24px;
			font-weight: 600;
			color: ${(props) => props.theme.color.text_01};
		}
		.null {
			border-bottom: 1px solid #d6d8d3;
			width: 251px;
			margin-bottom: 5px;
		}
	}
	.read-more {
		margin: 2.2rem 0;
		font-size: 14px;
		line-height: 24px;
		color: ${(props) => props.theme.color.text_02};
	}
	.position {
		margin: 1.4rem 0 2.7rem 0;
		// font-weight: 600;
		font-size: 12px;
		line-height: 16px;
	}
	.positionValue {
		font-weight: 600;
		font-size: 30px;
		line-height: 32px;
	}
`;

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		justifyContent: 'space-between',
		background: '#FFBF69',
		color: '#ffffff',
		alignItems: 'center',
		paddingRight: '6rem',
	},
}));

function LeaderboardCard() {
	const classes = useStyles();

	return (
		<Wrapper>
			<div className="heading">
				<h1>Leaderboard position</h1>
				<div className="null"></div>
			</div>
			<Paper className={classes.paper} elevation={2}>
				<div>
					<p className="positionValue">113rd</p>
					<p className="position">Position</p>
					<Link to="/dashboard_home2">
						<Button value="View" theme="deepYellow" style={{border:'1px solid #fff'}}>
							View
						</Button>
					</Link>
				</div>
				<div>
					<img src={ladder} alt="ladder" className="ladder" />
				</div>
			</Paper>

			<p className="read-more">
				Rankings are updated periodically, and directly tied to a company-wide
				reward system. The higher your rank, the higher your chance of walking
				away with excellent rewards. Complete all assessments to improve your
				rank.{' '}
			</p>
		</Wrapper>
	);
}

// LeaderboardCard.propTypes = {

// }

export default LeaderboardCard;
