import React, { Component } from 'react';
import Button from '../common/Button';
import styled from 'styled-components' ;
import img from '../../assets/heroHome.png';
import Hero from '../../assets/Hero.png';

// import homeHeroImage from "../assets/Hero.png";
// import "../App.css";
// import "../css/header.css"
// import Hero from "../assets/heroHome.png";
// const smallHero = "../assets/heroHome.png";
// const bigHero = "../assets/Hero.png";


class HomeHero extends Component {
	render() {
		return (
			<Wrapper style={{position:'relative'}}>
				{/* <img accessibilityLabel="Hero Banner" src={homeHeroImage} alt="Hero" /> */}
				<div style={heroHeaderContainer} className= "small-hero heroes">
					<div className="heroText">
						<div style={heroHeaderTextContainer}>
							<h3 style={Object.assign({}, heroHeaderText1, heroHeaderText)} >
              Wellness is the gift you give
							yourself.
							</h3>
							<h5 style={Object.assign({}, heroHeaderText2, heroHeaderText)}>
              Empower yourself with the knowledge and opportunity to live the
              best life possible.
							</h5>
						</div>
						<React.Fragment>
							<Button
								value="For you"
								theme="green"
								style={{ marginRight: '1.8rem' }}
							>
								{' '}
              For you
							</Button>
							<Button
								// className="greenBtn"
								value="For Organizations"
								theme="green"
							>
								{' '}
              For Organizations
							</Button>
						</React.Fragment>
					</div>
				</div>
				<div className="hero-image heroes">
				</div>
			</Wrapper>
		);
	}
}

const Wrapper = styled.div `
  .small-hero {
    background-image: url(${img});
    height: 56.997rem;
  //   border: .2rem solid black;
    width: 75%;
    text-align: center;
    margin:auto;
    position: relative;
    text-align: center;
    z-index: 4;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .hero-image{
	width: 125.0rem;
	max-width: 100%;
    height: 20rem;
    position: absolute;
    top: 60%;
    background-image: url(${Hero});
  }
  .heroes {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .heroText {
    position: absolute;
    top: 40%;
	width: 120rem;
	max-width: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

`;

const heroHeaderContainer = {

};

const heroHeaderText ={
	fontFamily: 'cursive',
	color: '#1d1d1d',

};
const heroHeaderText1 = {
	fontSize: "7.2rem",
	lineHeight: '8.6rem',

	fontWeight: 'normalbtn',
	marginTop: '15.7rem',
	//   textTransform: "uppercase",
};
const heroHeaderText2 = {
	fontSize: '1.6rem',
	lineHeight: '2.4rem',

	margin: '3.9rem 0',
	//   textTransform: "uppercase",
};
const heroHeaderTextContainer = {
	marginBottom: "2.5rem",
	// position: "absolute",
	// top: "50%",
	// left: "50%",
	// transform: "translate(-50%, -50%)"
};

export default HomeHero;
