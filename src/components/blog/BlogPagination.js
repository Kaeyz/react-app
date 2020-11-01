import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import { Card, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBlogs } from '../../store/actions/blogActions';

const Wrapper = styled.div`
  .grid-container {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  .blog_card {
    background: rgba(0, 0, 0, 0.03);
    min-width: 30rem;
    max-width: 100%;
    height: 550px;
    margin-top: 3rem;
  }
  .img_div {
    width: 100%;
    max-height: 30rem;
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
  .test_link {
    text-decoration: underline;
    color: ${(props) => props.theme.color.ui_01};
  }
  .deepYellow_card {
    background-color: ${(props) => props.theme.color.brand_03};
  }
  .purple_card {
    background-color: ${(props) => props.theme.color.brand_04};
  }
  .pink_card {
    background-color: ${(props) => props.theme.color.brand_01};
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
`;

function BlogPagination({
	tryTest,
	getBlogs,
	isLoading,
	src,
	alt,
	id,
	title,
	body,
	color,
}) {
	React.useEffect(() => {
		getBlogs();
	}, [getBlogs]);

	const displayTest = () => {
		return (
			<Link className="test_link" to="/">
        Try the test
			</Link>
		);
	};

	return (
		<div>
			<Wrapper>
				<div className="grid-container">
					{isLoading ? (
						<div>Loading ...</div>
					) : (
						<div className="grid-item">
							<Card className="blog_card">
								<div className="img_div">
									<img src={src} alt={alt} className="blog_img" />
								</div>
								<CardContent className={'card_content white_card'}>
									<h2>{title}</h2>
									<p className="card_description">{body}</p>
									<div className="card_footer">
										{tryTest && displayTest()}
										{/* <Link to="/blogPostDetails"> */}
										<Link to={`/blogPost/${id}`}>
											<Button
												value="Read More"
												theme={color === 'default' ? 'green' : color}
												style={{
													boxShadow: '0px 4px 4px rgba(46, 196, 182, 0.25)',
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
					)}
				</div>
			</Wrapper>
		</div>
	);
}

BlogPagination.defaultProps = {
	tryTest: true,
};

BlogPagination.propTypes = {
	tryTest: PropTypes.bool,
	color: PropTypes.string,
	data: PropTypes.object.isRequired,
	isLoading: PropTypes.bool.isRequired,
	getBlogs: PropTypes.func.isRequired,
	src: PropTypes.string,
	alt: PropTypes.string,
	id: PropTypes.string,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	asset: PropTypes.any,
};

const mapStateToProps = (state) => {
	const { blogs, isLoading } = state.blog;
	return { blogs: blogs || [], isLoading };
};

export default connect(mapStateToProps, { getBlogs })(BlogPagination);
