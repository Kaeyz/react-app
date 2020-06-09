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
								style={{ marginRight: '18px' }}
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
    height: 569.97px;
  //   border: 2px solid black;
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
	width: 1250px;
	max-width: 100%;
    height: 200px;
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
	width: 1200px;
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
	fontSize: 72,
	lineHeight: '86px',

	fontWeight: 'normalbtn',
	marginTop: '157px',
	//   textTransform: "uppercase",
};
const heroHeaderText2 = {
	fontSize: '16px',
	lineHeight: '24px',

	margin: '39px 0',
	//   textTransform: "uppercase",
};
const heroHeaderTextContainer = {
	marginBottom: 25,
	// position: "absolute",
	// top: "50%",
	// left: "50%",
	// transform: "translate(-50%, -50%)"
};

export default HomeHero;
