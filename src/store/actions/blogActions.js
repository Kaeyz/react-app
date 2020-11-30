import blogQueries from '../../client/queries/blogQueries';
import { ADD_BLOGS, ADD_BLOG, BLOG_IS_LOADING, BLOG_NOT_LOADING
} from '../types';

const blogIsLoading = () => {
	return { type: BLOG_IS_LOADING };
};

const blogNotLoading = () => {
	return { type: BLOG_NOT_LOADING };
};

const addBlogs = (blogs) => {
	return { type: ADD_BLOGS, payload: blogs };
};

const addBlog = (blog) => {
	return { type: ADD_BLOG, payload: blog};
};



// Get all blog post
export const getBlogs = (skip = 0, limit = 9) => dispatch => {
	dispatch(blogIsLoading());
	blogQueries.getBlogs(skip, limit)
		.then(res => {
			if (res.errors) {
				dispatch(blogNotLoading());
			}
			if (res.data.fetchAllBlogPost.content !== null) {
				dispatch(addBlogs(res.data.fetchAllBlogPost));
				dispatch(blogNotLoading());
			}
		})
		.catch(() => {
			dispatch(blogNotLoading());
		});

};

// Get all blog post
export const getSingleBlog = (id) => dispatch => {
	dispatch(blogIsLoading());
	blogQueries.getSingleBlog(id)
		.then(res => {
			if (res.errors) {
				dispatch(blogNotLoading());
			}
			if (res.data.fetchOneBlogPost !== null) {
				dispatch(addBlog(res.data.fetchOneBlogPost));
				dispatch(blogNotLoading());
			}
		})
		.catch(() => {
			dispatch(blogNotLoading());
		});

};





