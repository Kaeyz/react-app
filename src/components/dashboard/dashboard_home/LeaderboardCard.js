import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCompanyLeaderBoard } from '../../../store/actions/rewardActions';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import SmallSpinner from './../../common/spinner/SmallSpinner';


const Wrapper = styled.div`
width:100%;
	.paper {
		background: rgba(46, 196, 182, 0.06);
		border: 1px solid ${props => props.theme.color.ui_12};
		border-radius: 10px;
		padding: 3rem;
		cursor: pointer;
		&:hover{
			transform: scale(.9);
			transition: .3s;
		}
	}
	.position {
		font-weight: 300;
		font-size: 1.3rem;
		line-height: 1.2rem;
		letter-spacing: 0.2px;
		color: ${props => props.theme.color.ui_05};
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			font-size: 1.1rem;
		}
	}
	.positionValue {
		padding-bottom: 2rem;
		font-size: 4.8rem;
		line-height: 4.6rem;
		letter-spacing: -0.4px;
		color: ${props => props.theme.color.ui_05};
		span {
			font-size: 2rem;
		}
	}
`;

function LeaderboardCard({getCompanyLeaderBoard, isLoading, 	userPosition, leaderboardLength }) {

	useEffect(() => {
		getCompanyLeaderBoard();
	}, [getCompanyLeaderBoard]);

	return (
		<Wrapper>
			<Paper className="paper" elevation={2}>
				<div>
					{
						isLoading ?
							<SmallSpinner /> :
							<React.Fragment>
								<p className="positionValue">
									{userPosition || 1}<span>/ {leaderboardLength || 1}</span>
								</p>
								<p className="position">
							It is a long established fact that a reader
								</p>
							</React.Fragment>
					}
				</div>
			</Paper>
		</Wrapper>
	);
}

LeaderboardCard.propTypes = {
	getCompanyLeaderBoard: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
	userPosition: PropTypes.number.isRequired,
	leaderboardLength: PropTypes.number.isRequired
};

const mapStateToProps = state => {
	const { isLoading, leaderboard } = state.reward;
	const userId = state.user.user._id;
	const userPosition = leaderboard.findIndex(user => user.id === userId);

	return {
		isLoading,
		userPosition: userPosition + 1,
		leaderboardLength : leaderboard.length + 1
	};
};

export default connect(mapStateToProps, {getCompanyLeaderBoard})(LeaderboardCard);
