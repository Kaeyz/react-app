import rewardQueries from '../../client/queries/rewardQueries';
import { errorAlert, successAlert } from './alertActions';
import {
	ADD_REWARDS, REWARD_NOT_LOADING, REWARD_IS_LOADING, ADD_LEADERBOARD
} from '../types';


const addRewards = (rewards, type) => {
	return {
		type: ADD_REWARDS,
		payload: { type, rewards }
	};
};

const addLeaderboard = (leaderboard) => {
	return { type: ADD_LEADERBOARD, payload: leaderboard };
};

const rewardIsLoading = () => {
	return { type: REWARD_IS_LOADING };
};

const rewardNotLoading = () => {
	return { type: REWARD_NOT_LOADING };
};


export const addNewReward = (input) => dispatch => {
	dispatch(rewardIsLoading());
	rewardQueries.createReward(input)
		.then(res => {
			if (res.data) {
				const message = res.data.companyCreateReward.message;
				dispatch(successAlert(message));
				dispatch(rewardNotLoading());
			}
			if (res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
				dispatch(rewardNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(rewardNotLoading());
		});
};

export const updateReward = (input) => dispatch => {
	dispatch(rewardIsLoading());
	rewardQueries.updateReward(input)
		.then(res => {
			if (res.data) {
				dispatch(getRewards());
				dispatch(successAlert('Reward Updated'));
				dispatch(rewardNotLoading());
			}
			if (res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
				dispatch(rewardNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(rewardNotLoading());
		});
};

export const closeReward = (id) => dispatch => {
	dispatch(rewardIsLoading());
	rewardQueries.closeReward(id)
		.then(res => {
			if (res.data) {
				dispatch(getRewards());
				dispatch(successAlert(res.data.closeOneReward.message));
				dispatch(rewardNotLoading());
			}
			if (res.errors) {
				dispatch(errorAlert({ msg: res.errors[0].message }));
				dispatch(rewardNotLoading());
			}
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(rewardNotLoading());
		});
};


export const getRewards = () => dispatch => {
	dispatch(rewardIsLoading());
	rewardQueries.getCurrentReward()
		.then(res => {
			const reward = res.data.fetchCurrentReward ;
			dispatch(addRewards(reward, 'openReward'));
			dispatch(rewardNotLoading());
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(rewardNotLoading());
		});
};

export const getClosedRewards = () => dispatch => {
	dispatch(rewardIsLoading());
	rewardQueries.getClosedReward()
		.then(res => {
			const rewards = res.data.fetchAllClosedReward;
			dispatch(addRewards(rewards, 'closedRewards'));
			dispatch(rewardNotLoading());
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(rewardNotLoading());
		});
};

export const getCompanyLeaderBoard = () => (dispatch) => {
	dispatch(rewardIsLoading());
	rewardQueries.getCompanyLeaderBoard()
		.then(res => {
			const leaderboard = res.data.fetchLeaderBoardCompany;
			dispatch(addLeaderboard(leaderboard));
			dispatch(rewardNotLoading());
		})
		.catch(() => {
			dispatch(errorAlert({msg: 'Network Error!!'}));
			dispatch(rewardNotLoading());
		});
};
