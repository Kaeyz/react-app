import { ADD_BLOGS, ADD_FEATURED_BLOGS, ADD_BLOG, BLOG_IS_LOADING, BLOG_NOT_LOADING } from '../types';

const initialState = {
	isLoading: false,
	featuredBlogs: {},
	blogs: {},
	blog: {}
};

export default function (state = initialState, action) {
	switch (action.type) {
	case ADD_BLOGS:
		return {
			...state,
			blogs: action.payload,
		};
	case ADD_FEATURED_BLOGS:
		return {
			...state,
			featuredBlogs: action.payload,
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
