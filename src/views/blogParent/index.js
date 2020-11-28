import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardContent, MenuItem, Box, InputLabel, Select, FormControl } from '@material-ui/core';
import AppLayout from '../../components/layouts/appLayout/AppLayout';
import Button from '../../components/common/Button';
import Container from '../../components/common/Container';
import BlogPagination from '../../components/blog/BlogPagination';
import blogBg from '../../assets/largeBlogImg.svg';
import blogSmall from '../../assets/wellnessNav/check-up-dentist-doctors.svg';
import { getBlogs } from '../../store/actions/blogActions';

const Wrapper = styled.div`
  margin: 5rem 0;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    margin: 2rem 0;
  }
	.select_div {
		min-width: 100%;
		height: 5rem;
	}
  .box {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: grid;
    }
  }
  .sub-head {
    .big {
      font-size: 3rem;
      line-height: 3.2rem;
      font-weight: 600;
      @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
        font-size: 2.5rem;
      }
    }
    .small {
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin: 1.4rem 0rem;
    }
  }
  .grid-container {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  .subscribeInputs {
    margin-bottom: 1.7rem;
  }
  .subscribeInputs {
    input {
      background: #eeeded;
      border-radius: 5px;
      padding: 1rem 1.5rem;
      border: none;
      height: 4.8rem;
      outline: none;
      &::placeholder {
        color: rgba(96, 97, 97, 0.5);
        font-size: 1.4rem;
        font-family: "Matteo";
        line-height: 2.4rem;
      }
    }
    [type="email"] {
      width: 30.4rem;
      max-width: 100%;
    }
    .info {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 1.7rem;
      color: ${(props) => props.theme.color.text_01};
    }
  }
  #demo-simple-select-label {
       color: ${(props) => props.theme.color.text_02};
    font-family: "Matteo";
  }
  .sub-head {
    color: ${(props) => props.theme.color.text_01};
  }
`;


const categories = [
	{text: 'Lifestyle', value: 'lifestyle'},
	{text: 'Health', value: 'health'},
	{text: 'Fitness', value: 'fitness'},
	{ text: 'Nutrition', value: 'nutrition' }
];

function BlogPost({ getBlogs, blogs }) {
	React.useEffect(() => {
		getBlogs();
	}, [getBlogs]);

	const [filterText, setFilterText] = useState('');

	const filteredItems = blogs.filter((item) =>
		item.tags.toLocaleLowerCase().includes(filterText)
	);

	const itemsToDisplay = filterText ? filteredItems : blogs;

	return (
		<AppLayout>
			<Wrapper>
				<Container>
					<div className="sub-head">
						<p className="big">The Choose Life Blog</p>
						<p className="small">The Wellness Blog</p>
					</div>
					<div style={{ width: '100%', padding: 0 }}>
						<Box
							display="flex"
							justifyContent="center"
							className="box"
							style={{ padding: 0 }}
							p={1}
						>
							<Box p={1} flexGrow={1}>
								<div style={{ textDecoration: 'none' }}>
									<Card className="blog_card">
										<div className="img_div">
											<img src={blogBg} alt="blog bg" className="blog_img" />
										</div>

										<CardContent className={'card_content'}>
											<h2>Healthy Living</h2>
											<p className="card_description">
                        Using our algorithm, we carry out a preliminary
                        assessment to understand the state of your health and
                        determine how best to serve you!
											</p>
											<div className="card_footer">
												<p>WELLNESS</p>
											</div>
										</CardContent>
									</Card>
								</div>
							</Box>
							<Box p={1}>
								<FormControl className='select_div'>
									<InputLabel>
                    Explore by Category
									</InputLabel>
									<Select
										value={filterText}
										onChange={(e) =>
											setFilterText(e.target.value)
										}
									>
										{categories.map((category) => (
											<MenuItem key={category.value} value={category.value}>
												{category.text}
											</MenuItem>
										))}
									</Select>
								</FormControl>

								<p className="info">Subscribe to our Blog</p>
								<div className="subscribeInputs">
									<input
										type="email"
										id="email"
										placeholder="Email Address"
										name="email"
									/>
								</div>
								<Link to="">
									<Button value="Subscribe" theme="yellow">
                    Subscribe
									</Button>
								</Link>
							</Box>
						</Box>
					</div>
					<div className="grid-container">
						{itemsToDisplay.map((item) => (
							<div className="grid-item" key={item.id}>
								<BlogPagination
									title={item.title}
									id={item.id}
									body={item.body}
									src={item.asset !== null ? item.asset.url : blogSmall}
									alt={item.asset !== null ? item.asset.name : 'blog bg'}
								/>
							</div>
						))}
					</div>
				</Container>
			</Wrapper>
		</AppLayout>
	);
}

BlogPost.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	getBlogs: PropTypes.func.isRequired,
	blogs: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
	const { blogs, isLoading } = state.blog;
	return { blogs: blogs || [], isLoading };
};

export default connect(mapStateToProps, { getBlogs })(BlogPost);
