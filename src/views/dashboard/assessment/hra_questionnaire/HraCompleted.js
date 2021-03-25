
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../../components/common/Button';
import { getCompanyLeaderBoard } from '../../../../store/actions/rewardActions';

const Wrapper = styled(Paper)`
	background: ${(props) => props.theme.color.ui_01};
	border-radius: 20px;
	width: 70%;
	margin: auto;
	align-items: center;
	text-align: center;
	padding: 8rem;
	display: flex;
	min-height: 90vh;
	justify-content: center;
	margin-top: 30px;
	flex-direction: column;
	@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
		width: 80%;
		padding: 6rem;
	}
	@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		width: 90%;
		padding: 2rem;
	}
	#check-img {
		height: 100px;
	}
	.heading {
		font-weight: bold;
		font-size: 2rem;
		line-height: 2rem;
		letter-spacing: -0.2px;
		color: ${(props) => props.theme.color.ui_05};
		padding-bottom: 2.4rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		}
	}
	.detail {
		font-weight: 300;
		line-height: 3rem;
		letter-spacing: 0.2px;
		color: ${(props) => props.theme.color.ui_06};
		.link {
			color: ${(props) => props.theme.color.active_primary};
			text-decoration: underline;
		}
	}
	.button-links {
		padding-top: 6rem;
	}
`;

function HraCompleted({ getCompanyLeaderBoard, isLoading, userPosition }) {
	useEffect(() => {
		getCompanyLeaderBoard();
	}, [getCompanyLeaderBoard]);

	return (
		<Wrapper>
			<img
				src="https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607309840/chooseLife/checkk_k1bie4.gif"
				id="check-img"
				alt="completed"
			/>
			<h1 className="heading">Health Questionnaire Completed</h1>
			<p className="detail">
				Congratulations! You’ve got 500 points in this section.
			</p>
			<p className="detail">
				{!isLoading && `You’re currently ${userPosition || 1} on the`}{' '}
				{''}
				<Link className="link" to="/rewards/leaderboard">
					leaderboard
				</Link>
				.
			</p>
			<p className="detail">
				To move up complete the wellness challenge.
			</p>
			<div className="button-links flex">
				<Link className="linked-btn" to="/assessment">
					<Button value="Back to Assessment" theme="whiteBtn">
						Back to Assessment
					</Button>
				</Link>
			</div>
		</Wrapper>
	);
}

HraCompleted.propTypes = {
	getCompanyLeaderBoard: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
	userPosition: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
	const { isLoading, leaderboard } = state.reward;
	const userId = state.user.user._id;
	const userPosition = leaderboard.findIndex((user) => user.id === userId);

	return {
		isLoading,
		userPosition: userPosition + 1,
	};
};

export default connect(mapStateToProps, { getCompanyLeaderBoard })(
	HraCompleted,
);
