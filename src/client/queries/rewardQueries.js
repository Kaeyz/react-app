import { client } from '../client';

const rewardQueries = {};

rewardQueries.getCurrentReward = () => {
	const query = `
	query FETCH_CURRENT_REWARD {
		fetchCurrentReward {
      _id
      title
      description
      startDate
      endDate
      isClosed
		}
	}
	`;

	return new Promise((resolve, reject) => {
		client(query)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

rewardQueries.getClosedReward = () => {
	const query = `
	query FETCH_CLOSED_REWARD {
		fetchAllClosedReward {
      _id
      title
      description
      startDate
      endDate
      isClosed
		}
	}
  `;

	return new Promise((resolve, reject) => {
		client(query)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

rewardQueries.getCompanyLeaderBoard = () => {
	const query = `
	query FETCH_COMPANY_LEADERBOARD {
		fetchLeaderBoardCompany {
      id
      name
      department
      branch
      points
		}
	}
  `;

	return new Promise((resolve, reject) => {
		client(query)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

rewardQueries.createReward = (input) => {
	const query = `
	mutation CREATE_REWARD ($input: createRewardInput) {
		companyCreateReward (input: $input) {
      message
		}
	}
	`;

	const variables = { input };

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

rewardQueries.updateReward = (input) => {
	const query = `
	mutation UPDATE_REWARD ($input: updateRewardInput) {
		companyUpdateReward(input: $input) {
      _id
      title
      description
      startDate
      endDate
      isClosed
		}
	}
	`;

	const variables = { input };

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

rewardQueries.closeReward = (id) => {
	const query = `
	mutation CLOSE_REWARD($id: String) {
		closeOneReward(id: $id) {
				message
		}
	}
	`;

	const variables = { id };
	return new Promise((resolve, reject) => {
		client(query, variables)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

export default Object.freeze(rewardQueries);