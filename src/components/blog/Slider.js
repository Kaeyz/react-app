import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import leftWhite from '../../assets/leftwhiteflower.png';
import rightWhite from '../../assets/rightwhiteflower.png';
import arrowLeft from '../../assets/slideArrowLeft.png';
import arrowRight from '../../assets/slideArrowRight.png';
import { getFeaturedBlogs } from '../../store/actions/blogActions';
import { capitalizeFirstLetter, convertDate } from '../../utils/helper';
import MonoBlog from './MonoBlog';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.ui_text_08};
	padding: 2.5rem;
	position: relative;
  overflow: hidden;
  .slide-heading {
		font-size: 4.5rem;
    padding: 30px 0;
    color: ${(props) => props.theme.color.ui_01};
    text-align: center;
  }
  .slick-slide {
    width: auto !important;
    margin: 0 1rem;
  }
  .slick-prev,
  .slick-next {
    height: 50px;
    width: 50px;
    cursor: pointer;
    transition: transform ease-in 0.1s;
  }

  .slick-next {
    top: 50%;
    right: 65px;
    z-index: 999;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      right: 14px;
    }
  }

  .slick-prev {
    top: 50%;
    left: 52px;
    z-index: 999;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      left: auto;
    }
  }
  .absolute {
    position: absolute;
  }
  .rightwhite {
    right: -33px;
    height: 445px;
    top: 27px;
  }
  .leftwhite {
    left: 0;
    height: 243px;
    bottom: 0;
  }
`;
const SlideBlog = ({ featuredBlogs, isLoading, getFeaturedBlogs }) => {
	useEffect(() => {
		getFeaturedBlogs();
	}, []);

	const renderSlides = () => {
		return featuredBlogs.content.map((blog) =>
			<MonoBlog
				key={blog.id}
				to={`/blog/${blog.id}`}
				src={blog.asset !== null ? blog.asset.url : 'https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607309862/chooseLife/girlRunning_mwel4s.png'}
				title={blog.title}
				author={blog.author}
				createdAt={convertDate(blog.createdAt)}
				tag={capitalizeFirstLetter(blog.tags)}
			/>
		);
	};

	const settings = {
		dots: true,
		infinite: true,
		speed: 50,
		slidesToShow: 1,
		slidesToScroll: 4,
		nextArrow: <img src={arrowRight} alt="arrowRight" />,
		prevArrow: <img src={arrowLeft} alt="arrowLeft" />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
					infinite: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 4,
					infinite: true
				},
			},
		],
	};

	return (
		<Wrapper className="App">
			<img src={leftWhite} alt="leftWhite" className="absolute  leftwhite" />
			<img src={rightWhite} alt="rightWhite" className="absolute rightwhite" />
			<p className="slide-heading"> Featured</p>
			<Slider key={Date.now()} {...settings}>{
				!isLoading &&
					featuredBlogs && featuredBlogs.content ? renderSlides() :
					<div>loading</div>
			}</Slider>
		</Wrapper>
	);
};

SlideBlog.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	featuredBlogs: PropTypes.object.isRequired,
	getFeaturedBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	const { featuredBlogs, isLoading } = state.blog;
	return { featuredBlogs, isLoading };
};

export default connect(mapStateToProps, {getFeaturedBlogs})(SlideBlog);
