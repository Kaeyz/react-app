import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from '../../components/common/Container';
import styled from 'styled-components';
import AppLayout from '../../components/layouts/appLayout/AppLayout';
// import Grid from '@material-ui/core/Grid';
// import MonoBlog from '../../components/blog/MonoBlog';
import img from '../../assets/wellnessNav/lifestyle.svg';
import spread from '../../assets/woman-spreading-both-her-arms.svg';
import { getSingleBlog, getBlogs } from '../../store/actions/blogActions';
import Button from '../../components/common/Button';
import blogBg from '../../assets/wellnessNav/check-up-dentist-doctors.svg';
import { Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  margin-bottom: 7rem;
  .headP {
    font-size: 3rem;
    line-height: 3.2rem;
    font-weight: 600;
    color: ${(props) => props.theme.color.text_01};
	padding: 3rem 0 0 0;
  }
  .grid-container {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  .blog_img {
    width: 100%;
    height: 100%;
  }
  .card_content {
    text-align: start;
    background: ${(props) => props.theme.color.brand_02};
    margin-top: -0.9rem;
    color: #fff;
    height: 100%;
  }
  .card_description {
    font-size: 1.1rem;
  }
  .card_footer {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .upper h4,
  longDetail {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${(props) => props.theme.color.text_02};
    font-weight: 300;
    margin: 2rem 0;
  }
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.4rem;
  }
  .orangeP{
    font-size: 1.4rem;
    line-height: 2.4rem;
	letter-spacing: 0.075rem;
	display: flex;
	 margin-top: 1.5rem;
  }
  .detailbg {
    background: url(${spread});
    height: 424px;
    margin: 2rem 0 5rem 0;
  }
  .white_card {
    background-color: ${(props) => props.theme.color.ui_01};
    color: #000;
    .test_link {
      visibility: hidden;
    }
    button {
      color: ${(props) => props.theme.color.brand_02};
      background-color: ${(props) => props.theme.color.ui_text_01};
      border: 1px solid ${(props) => props.theme.color.brand_02};
      &:hover {
        background-color: ${(props) => props.theme.color.brand_02};
        transition: 0.2s;
      }
    }
  }
  .card_footer{
	justify-content: end;
	margin-top: 2rem;
  }

`;

function BlogPostDetail({
	match,
	getSingleBlog,
	getBlogs,
	blogs,
	blog,
	isLoading,
}) {
	const { blogId } = match.params;

	React.useEffect(() => {
		getSingleBlog(blogId);
		getBlogs();
	}, [blogId, getSingleBlog, getBlogs]);

	const {
		title,
		body,
		createdAt,
		tags,
			} = blog;
// const{id} = blogs;

	const reduced = blogs.reduce(function (filtered, option) {
		if (option.tags === tags && option.title !== title) {
			const someNewValue = {
				tags: option.tags,
				title: option.title,
				asset: option.asset,
				body: option.body,
				id: option.id,
			};
			filtered.push(someNewValue);
		}
		return filtered;
	}, []);

	const size = 3;
	const items = reduced ? reduced.slice(0, size) : '';


	return (
		<AppLayout>
			<Wrapper>
				<Container>
					<div className="upper">
						<div className="sub-header">
							<p className="headP">{title}</p>

							<p
								className="orangeP"
							>
								<img src={img} alt="img" />
								{!isLoading && tags ? tags.toUpperCase() : ''}
							</p>
							<h4>
                Published on{' '}
								{!isLoading && createdAt
									? createdAt.split('T23:00:00.000Z')
									: ''}
							</h4>
						</div>
						<div>
							<div className="detailbg"></div>
							<p className="longDetail">{!isLoading && body}</p>
						</div>
					</div>

					<div className="lower">
						<p className="headP">Similar Posts</p>
						<div className="grid-container">
							{isLoading ? (
								<div>Loading ...</div>
							) : items.length !== 0 ? (
								items.map(({  title, body, asset, id }) => {
									return (
										<div className="grid-item" key={id}>
											<Card className="blog_card">
												<div className="img_div">
													{isLoading ? (
														<div>Loading ...</div>
													) : asset !== null ? (
														<img
															src={asset.url}
															alt={asset.name}
															className="blog_img"
														/>
													) : (
														<img
															src={blogBg}
															alt="blog bg"
															className="blog_img"
														/>
													)}
												</div>
												<CardContent className={'card_content white_card'}>
													<h2>{title}</h2>
													<p className="card_description">{body}</p>
													<div className="card_footer">

														<Link to={`/blogPost/${id}`}>
															<Button
																value="Read More"
																theme="greenBtn"
																style={{
																	boxShadow:
                                    '0px 4px 4px rgba(46, 196, 182, 0.25)',
																}}
															>
																{' '}
                                Read More
															</Button>
														</Link>
													</div>
												</CardContent>
											</Card>
										</div>
									);
								})
							) : (
								<p>No similar post</p>
							)}
						</div>
					</div>
				</Container>
			</Wrapper>
		</AppLayout>
	);
}

BlogPostDetail.defaultProps = {
	tryTest: true,
};

BlogPostDetail.propTypes = {
	match: PropTypes.object.isRequired,
	blog: PropTypes.object.isRequired,
	getSingleBlog: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
	getBlogs: PropTypes.func.isRequired,
	blogs: PropTypes.array.isRequired,
	id: PropTypes.string,
};

const mapStateToProps = (state) => {
	const { blog, blogs, isLoading } = state.blog;
	return { blogs: blogs || [], blog, isLoading };
};

export default connect(mapStateToProps, { getBlogs, getSingleBlog })(
	withRouter(BlogPostDetail)
);
