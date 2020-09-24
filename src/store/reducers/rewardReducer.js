import {ADD_REWARDS, CLEAR_REWARDS, REWARD_IS_LOADING, REWARD_NOT_LOADING, ADD_LEADERBOARD, CLEAR_LEADERBOARD } from '../types';

const initialState = {
	rewards: {
		openReward: {},
		closedRewards: []
	},
	isLoading: false,
	leaderboard: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
	case ADD_REWARDS:
		return {
			...state,
			rewards: {
				...state.rewards,
				[action.payload.type]: action.payload.rewards
			}
		};
	case CLEAR_REWARDS:
		return {
			...state,
			rewards: initialState.rewards
		};
	case ADD_LEADERBOARD:
		return {
			...state,
			leaderboard: action.payload
		};
	case CLEAR_LEADERBOARD:
		return {
			...state,
			leaderboard: initialState.leaderboard
		};
	case REWARD_IS_LOADING:
		return {
			...state,
			isLoading: true
		};
	case 	REWARD_NOT_LOADING:
		return {
			...state,
			isLoading: false
		};
	default:
		return state;
	}
}
