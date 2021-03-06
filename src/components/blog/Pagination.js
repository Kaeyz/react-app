import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MonoBlog from '../../components/blog/MonoBlog';
import { getBlogs } from '../../store/actions/blogActions';
import { capitalizeFirstLetter, convertDate } from '../../utils/helper';

const Wrapper = styled.div`
	.grid-container {
		display: grid;
		justify-items: center;
		grid-gap: 3rem;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		}
		li {
			list-style-type: none;
		}
	}
	.pagination {
		display: flex;
		justify-content: center;
		margin: 5rem 0 4rem 0;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			padding-left: 0;
		}
	}
	.pagination li {
		list-style-type: none;
		padding: 15px 20px;
		font-weight: normal;
		font-size: 1.3rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			padding: 5px 15px;
		}
	}
	.pagination li:nth-child(3),
	.pagination li:nth-child(4),
	.pagination li:nth-child(5) {
		border-right: 1px solid ${(props) => props.theme.color.text_14};
	}
	.pagination li:nth-child(2),
	.pagination li:nth-child(6) {
	}
	.pagination li a {
		color: ${(props) => props.theme.color.text_15};
	}
	.pagination li.active {
		background-color: ${(props) => props.theme.color.text_15};
	}
	.pagination li.active a {
		color: ${(props) => props.theme.color.text_03};
	}
`;


const PaginatedContent = ({ blogs, isLoading, getBlogs }) => {
	// Data to be rendered using pagination.
	const [activePage, setCurrentPage] = useState(1);

	useEffect(() => {
		setCurrentPage(Math.ceil(blogs.skip / blogs.limit) + 1);
	}, [blogs, setCurrentPage]);


	const renderBlogContent = () => {
		return blogs.content.map((blog, index) => (
			<MonoBlog
				key={index}
				to={`/blog/${blog.id}`}
				src={
					blog.asset !== null
						? blog.asset.url
						: 'https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607309862/chooseLife/girlRunning_mwel4s.png'
				}
				title={blog.title}
				author={blog.author}
				createdAt={convertDate(blog.createdAt)}
				tag={capitalizeFirstLetter(blog.tags)}
				tagColor={
					blog.tags === 'fitness' || blog.tags === 'Fitness'
						? 'yellow'
						: blog.tags === 'nutrition' || blog.tags === 'Nutrition'
							? 'blue'
							: blog.tags === 'lifestyle' || blog.tags === 'Lifestyle'
								? 'orange'
								: blog.tags === 'health' || blog.tags === 'Health'
									? 'green'
									: ''
				}
			/>
		));
	};


	const handlePageChange = (pageNumber) => {
		const skip = (pageNumber - 1) * blogs.limit;
		getBlogs(skip);
	};

	return (
		<Wrapper>
			<div className="result grid-container">
				{isLoading ? <div>Loading...</div> :
					blogs && blogs.content ? renderBlogContent() :
						<div>loading...</div>
				}
			</div>
			<div className="pagination">
				{!isLoading &&
					<Pagination
						activePage={activePage}
						firstPageText=""
						lastPageText=""
						prevPageText={'Previous'}
						nextPageText={'Next'}
						itemsCountPerPage={blogs.limit}
						totalItemsCount={blogs.total}
						pageRangeDisplayed={3}
						onChange={handlePageChange}
					/>
				}
			</div>
		</Wrapper>
	);
};


PaginatedContent.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	blogs: PropTypes.array.isRequired,
	getBlogs: PropTypes.func.isRequired,
};

export default connect(null, {getBlogs})(PaginatedContent);
