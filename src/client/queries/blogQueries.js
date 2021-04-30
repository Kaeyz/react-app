import { client } from '../client';

const blogQueries = {};

blogQueries.getBlogs = (skip, limit) => {
	const query = `
	query GET_BLOGS($limit: Int! $skip: Int!) {
		fetchAllBlogPost(limit: $limit, skip: $skip) {
			total
			skip
			limit
			content {
				id
				title
				body
				createdAt
				tags
				feature
				author
				authorRole
				imageCaption
				imageCredit
				asset {
					name
					url
				}
			}
		}
	}
	`;
	const variables = { skip, limit };

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

blogQueries.getFeaturedBlogs = () => {
	const query = `
	query FETCH_FEATURED_BLOGS {
		fetchAllFeaturedBlogPost {
				 total
				 skip
				 limit
				 content {
						id
						title
						body
						createdAt
						tags
						author
						authorRole
						imageCaption
						imageCredit
						asset {
									name
									url
						}
						feature
				 }
		}
}
	`;

	return new Promise((resolve, reject) => {
		client(query)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

blogQueries.getSingleBlog = (id) => {
	const query = `
	query mutation_LOGIN_MUTAT2790($id: String) {
		fetchOneBlogPost(id: $id) {
			id
			title
			body
			createdAt
			tags
			author
			authorRole
			imageCaption
			imageCredit
			asset {
				name
				url
			}
		}
	}
	`;

	const variables = { id };

	return new Promise((resolve, reject) => {
		client(query, variables)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

export default Object.freeze(blogQueries);
