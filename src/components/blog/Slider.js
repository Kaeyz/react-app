/*eslint-disable*/
import React from 'react';
import styled from 'styled-components';
import MonoBlog from './MonoBlog'
import arrowLeft from '../../assets/slideArrowLeft.png'
import arrowRight from '../../assets/slideArrowRight.png'
import leftWhite from '../../assets/leftwhiteflower.png'
import rightWhite from '../../assets/rightwhiteflower.png'
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
.slider {
	margin: 0 auto;
	height: 500px;
	overflow: hidden;
  }
  
  .slider-wrapper {
	height: 100%;
	display: flex;
	width: 100%;
  }
  
  .slide {
	display: inline-block;
	margin-right: 2.5rem;
	height: fit-content;
  }
  
  .arrow {
	height: 50px;
	width: 50px;
		cursor: pointer;
	transition: transform ease-in .1s;
  }
  
  .nextArrow {
	top: 50%;
	right: 65px;
	z-index: 999;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		 right: 14px;
	  }
  }
  
  .backArrow {
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

class Slider extends React.Component {
	constructor(props) {
	  super(props)
  
	  this.state = {
		images: [
		  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
		  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
		  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
		  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
		  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
		  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
		  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
		  "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
		],
		currentIndex: 0,
		translateValue: 0
	  }
	}
  
	goToPrevSlide = () => {
	  if(this.state.currentIndex === 0)
		return;
	  
	  this.setState(prevState => ({
		currentIndex: prevState.currentIndex - 1,
		translateValue: prevState.translateValue + this.slideWidth()
	  }))
	}
  
	goToNextSlide = () => {
	  // Exiting the method early if we are at the end of the images array.
	  // We also want to reset currentIndex and translateValue, so we return
	  // to the first image in the array.
	  if(this.state.currentIndex === this.state.images.length - 1) {
		return this.setState({
		  currentIndex: 0,
		  translateValue: 0
		})
	  }
	  
	  // This will not run if we met the if condition above
	  this.setState(prevState => ({
		currentIndex: prevState.currentIndex + 1,
		translateValue: prevState.translateValue + -(this.slideWidth())
	  }));
	}
  
	slideWidth = () => {
	   return document.querySelector('.slide').clientWidth
	}
  
	render() {
	  return (
		  <Wrapper>
			  <img src={leftWhite} alt="leftWhite" className="absolute  leftwhite"/>
			  <img src={rightWhite} alt="rightWhite" className="absolute rightwhite"/>
			  <p className="slide-heading">
				  Featured
			  </p>
		<div className="slider">
  
		  <div className="slider-wrapper"
			style={{
			  transform: `translateX(${this.state.translateValue}px)`,
			  transition: 'transform ease-out 0.45s'
			}}>
			  {
				this.state.images.map((image, i) => (
				  <Slide key={i} image={image} />
				))
			  }
		  </div>
  
		  <LeftArrow
		   goToPrevSlide={this.goToPrevSlide}
		  />
		  <RightArrow
		   goToNextSlide={this.goToNextSlide}
		  />
		</div>
		</Wrapper>
	  );
	}
  }
  
  
  const Slide = ({ image }) => {

	return <div className="slide" >
		<MonoBlog
                  title="Keeping Fit In The Age of COVID-19"
                  id="Elijah Burton"
                  createdAt="27 Aug 2019"
                />
	</div>
  }
  
  
  const LeftArrow = (props) => {
	return (
	  <div className="backArrow arrow absolute" onClick={props.goToPrevSlide}>
 <img src={arrowLeft} alt="arrowLeft" />	  </div>
	);
  }
  
  
  const RightArrow = (props) => {
	return (
	  <div className="nextArrow arrow absolute" onClick={props.goToNextSlide}>
		  <img src={arrowRight} alt="arrowRight"/>

	  </div>
	);
  }
  
  export default Slider