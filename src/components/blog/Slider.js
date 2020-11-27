/*eslint-disable */

import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogImg from "../../assets/girlRunning.png";
import Slider from "react-slick";
import styled from 'styled-components';
import MonoBlog from './MonoBlog'
import arrowLeft from '../../assets/slideArrowLeft.png'
import arrowRight from '../../assets/slideArrowRight.png'
import leftWhite from '../../assets/leftwhiteflower.png'
import rightWhite from '../../assets/rightwhiteflower.png'
import { connect } from "react-redux";
import { getBlogs } from "../../store/actions/blogActions";
import PropTypes from "prop-types";

const Wrapper = styled.div`
background-color: ${(props) => props.theme.color.ui_text_08};
padding-left: 20rem;
position: relative;
overflow: hidden;
@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
	padding-left:12rem;
}
@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
	padding-left: 1rem;
}
.slide-heading{
	font-size: 4.5rem;
		padding: 30px 0;
line-height: 7.1rem;
color: ${(props) => props.theme.color.ui_01};
text-align : center;
}

.slick-prev, .slick-next  {
	height: 50px;
	width: 50px;
		cursor: pointer;
	transition: transform ease-in .1s;
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
  .absolute{
	  position: absolute;
  }
  .rightwhite{
	right: -33px;
    height: 445px;
    top: 27px;
}
  .leftwhite{
	left: 0;
    height: 243px;
    bottom: 0;
}
  `
 function SlideBlog({ getBlogs, blogs, isLoading }) {
	React.useEffect(() => {
		getBlogs();
	  }, [getBlogs]);

	  function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	  }
// 	  const reduced = blogs.reduce(function (filtered, option) {
// 		if (option.feature === "featured") {
// 			const someNewValue = {
// 				tags: option.tags,
// 				title: option.title,
// 				asset: option.asset,
// 				author: option.author,
// 				id: option.id,
// 			};
// 			filtered.push(someNewValue);
// 		}
// 		return filtered;
// 	}, []);
// console.log(reduced)
  const renderSlides = () =>
    blogs.map(blog => (
		isLoading ? <div>Loading...</div> :
		<MonoBlog
        key={blog.id}
        to={`/blog/${blog.id}`}
        src={blog.asset !== null ? blog.asset.url : blogImg }
        title={blog.title}
        author={blog.author}
        createdAt={blog.createdAt.slice(0, 10)}
        tag={capitalizeFirstLetter(blog.tags)}
        tagColor={
          blog.tags === "fitness"
            ? "yellow"
            :blog.tags === "nutrition"
            ? "blue"
            : blog.tags === "lifestyle"
            ? "orange"
            : blog.tags === "health"
            ? "green"
            : ""
        }
      />
    ));

  return (
    <Wrapper className="App">
		<img src={leftWhite} alt="leftWhite" className="absolute  leftwhite"/>
			  <img src={rightWhite} alt="rightWhite" className="absolute rightwhite"/>
			  <p className="slide-heading">
				  Featured
			  </p>
      <Slider dots={false} slidesToShow={3}
        slidesToScroll={3} nextArrow={<img src={arrowRight} alt="arrowRight"/>}
        prevArrow={ <img src={arrowLeft} alt="arrowLeft" />}>{renderSlides()}</Slider>
    </Wrapper>
  );
}

SlideBlog.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	getBlogs: PropTypes.func.isRequired,
	blogs: PropTypes.array.isRequired,
  };
  
  const mapStateToProps = (state) => {
	const { blogs, isLoading } = state.blog;
	return { blogs: blogs || [], isLoading };
  };
  
  export default connect(mapStateToProps, { getBlogs })(SlideBlog);
  