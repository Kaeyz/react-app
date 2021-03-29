
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Remarkable } from 'remarkable';
import styled from 'styled-components';
import Slider from '../../components/blog/Slider';
import Container from '../../components/common/Container';
import SEO from '../../components/common/SEO';
import AppLayout from '../../components/layouts/appLayout/AppLayout';
import Header from '../../components/layouts/appLayout/header/index2';
import { getBlogs, getSingleBlog } from '../../store/actions/blogActions';
import { capitalizeFirstLetter } from '../../utils/helper';

const Wrapper = styled.div`
	text-align: center;
	padding-top: 103px;
	margin-bottom: 7rem;
	.headP {
		font-size: 4rem;
		line-height: 3.2rem;
		font-weight: 400;
		margin-bottom: 2rem;
		color: ${(props) => props.theme.color.text_01};
		padding: 3rem 0 0 0;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			font-size: 3rem;
		}
	}
	.author {
		color: ${(props) => props.theme.color.text_12};
		font-size: 2.1rem;
		line-height: 2rem;
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
	.tag-date {
		margin-top: 1rem;
		justify-content: space-between;
	}
	.date {
		color: ${(props) => props.theme.color.text_02};
	}
	.tag {
		font-weight: 100;
		width: fit-content;
		padding: 3px 20px;
		color: ${(props) => props.theme.color.text_03};
	}
	.yellow {
		background-color: rgba(247, 194, 54, 0.8);
	}
	.blue {
		background-color: rgba(46, 196, 182, 0.8);
	}
	.green {
		background-color: rgba(141, 184, 56, 0.8);
	}
	.orange {
		background-color: rgba(244, 120, 3, 0.8) !important;
	}
	.card_description {
	}
	.longDetail,
	.detail {
		font-size: 1.5rem;
		color: ${(props) => props.theme.color.text_02};
		font-weight: 300;
		margin: 4rem 0 6rem 0;
		margin: 4rem 0;
		text-align: left;
	}
	.longDetail p {
		margin-bottom: 20px;
		br {
			margin-bottom: 20px;
			height: 10px;
			content: '';
			display: block;
		}
	}

	img {
		width: 2.4rem;
		height: 2.4rem;
		margin-right: 0.4rem;
	}

	.orangeP {
		letter-spacing: 0.075rem;
		display: flex;
		margin-top: 1.5rem;
	}

	.detailbg {
		height: 424px;
		margin: 2rem 0 0rem 0;
	}
	.img2 {
		height: 300px;
		margin: auto;
		width: 70%;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			width: 100%;
		}
	}
	.bg {
		background-size: cover;
		background-position: center;
	}
	.img-cap {
		font-style: italic;
		font-weight: 500;
		color: ${(props) => props.theme.color.ui_text_08};
		margin-top: 2rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			line-height: 1.7rem;
		}
	}
	.white_card {
		background-color: ${(props) => props.theme.color.ui_01};
		color: ${(props) => props.theme.color.text_05};
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
`;

function BlogPostDetail({ match, getSingleBlog, blog, isLoading }) {
	const { blogId } = match.params;

	React.useEffect(() => {
		window.scrollTo(0, 0);
		getSingleBlog(blogId);
	}, [blogId, getSingleBlog]);

	const {
		title,
		body,
		createdAt,
		tags,
		author,
		asset,
		imageCaption,
		imageCredit,
	} = blog;

	return (
		<AppLayout header={<Header />}>
			<SEO
				title={!isLoading && title}
				image={!isLoading && asset?.url}
				location={location.href}
			/>
			<Wrapper>
				<Container>
					<div className="upper">
						<div className="sub-header">
							<p className="headP">{!isLoading && title}</p>
							<p className="author">
								{!isLoading && author ? author : ''}
							</p>
							<div className="tag-date flex">
								<p
									className={`${
										tags === 'fitness'
											? 'yellow'
											: tags === 'nutrition'
												? 'blue'
												: tags === 'lifestyle'
													? 'orange'
													: tags === 'health'
														? 'green'
														: ''
									} tag`}
								>
									{!isLoading && tags
										? capitalizeFirstLetter(tags)
										: ''}
								</p>
								<p className="date">
									{!isLoading && createdAt
										? createdAt.slice(0, 10)
										: ''}
								</p>
							</div>
						</div>
						<div>
							{isLoading ? (
								<div>Loading</div>
							) : (
								<React.Fragment>
									<div
										className="detailbg bg"
										style={{
											backgroundImage:
												asset != null
													? `url(${asset.url})`
													: 'url("https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607309872/chooseLife/woman-spreading-both-her-arms_hly6ur.png"})',
										}}
									/>
									<p className="img-cap">
										{imageCaption || 'no image caption'} /{' '}
										{imageCredit || 'chooselife team'}
									</p>
									<div
										className=" detail longDetail"
										dangerouslySetInnerHTML={{
											__html: new Remarkable({
												html: true,
												breaks: true,
											}).render(body),
										}}
									/>
								</React.Fragment>
							)}
						</div>
					</div>
				</Container>
				<Slider />
			</Wrapper>
		</AppLayout>
	);
}

BlogPostDetail.propTypes = {
	match: PropTypes.object.isRequired,
	blog: PropTypes.object.isRequired,
	getSingleBlog: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
	id: PropTypes.string,
};

const mapStateToProps = (state) => {
	const { blogs, blog, isLoading } = state.blog;
	return { blogs: blogs || [], blog, isLoading };
};

export default connect(mapStateToProps, { getBlogs, getSingleBlog })(
	withRouter(BlogPostDetail),
);
