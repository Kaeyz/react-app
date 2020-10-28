import { ADD_BLOGS , ADD_BLOG, BLOG_IS_LOADING, BLOG_NOT_LOADING } from '../types';

const initialState = {
	blogs: [],
	isLoading: false,
	blog: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
	case ADD_BLOGS:
		return {
			...state,
			blogs: action.payload,
		};
	case ADD_BLOG:
		return {
			...state,
			blog: action.payload,
		};

	case BLOG_IS_LOADING:
		return {
			...state,
			isLoading: true,
		};
	case BLOG_NOT_LOADING:
		return {
			...state,
			isLoading: false,
		};
	default:
		return state;
	}
}
