import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components' ;
import Button from '../common/Button';


function Video() {
	return (
		<Wrapper2 className="flex curvy">

			<div style={wholeVideoContent}>
				<div style={iframe}>
					<div >
						<iframe
							src="https://www.youtube.com/embed/E7wJTI-1dvQ"
							frameBorder="0"
							allow="autoplay; encrypted-media"
							width="420" height="200"
							allowFullScreen
							title="video"
						/>
					</div>
				</div>

				<div style={{width:'390px'}}>
					<h3 style={videoText}>Choosing Wellness</h3>
					<p style={videoTextP}>
            Wellness is a circle. A circle designed to help you achieve
            wholesome balance for you mind, body & soul. We take a scientific
            look at the factors driving stress & strain in your workplace and in
            your private life and we help you find a way out.
					</p>
					<Link style={priLink} className="hover-link" to="../pages/About.js">
            Read up more
					</Link>
					<br />
					<div style={{ marginTop: 20 }}>
						<React.Fragment>
							<Button value="As a Company" theme="green" style={{ marginRight: '18px' }}>
								{' '}
              As a Company
							</Button>
							<Button value="As a person" theme="green">
								{' '}
              As a person
							</Button>
						</React.Fragment>
					</div>
				</div>
			</div>
		</Wrapper2>
	);
}

const Wrapper2 = styled.div `
background: #EBF8F7;

  height: 419.4px;
  margin-top: -30px;
  z-index: 5;

.hover-link:hover{
  color: #1d1d1d !important;
  transition: .2s;

 }
`;


const wholeVideoContent = {
	width: '70%',
	// margin:"auto",

	alignItems:'center',
	height: 256,
	display: 'flex',
	justifyContent: 'space-between',
};

const iframe ={
	background: '#3CBDB2',
	boxShadow: '0px 4px 25px rgba(60, 189, 178, 0.25)',
	justifyContent: 'center',
	display: 'flex',
	padding: '20px',
};
const priLink = {
	fontWeight: 600,
	fontSize: 14,
	lineHeight: '132%',
	textDecorationLine: 'underline',
	marginBottom: 20,
	color: '#3CBDB2',
};

const videoText = {
	fontWeight: 'bold',
	fontSize: '24px',
	lineHeight: '29px',
	marginBottom: 20.4,
	color: '1d1d1d',
};
const videoTextP = {
	color: '#606161',
	fontSize: '14px',
	lineHeight: '22px',
	marginBottom: 6.6,
};

export default Video;
