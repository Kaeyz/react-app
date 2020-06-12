import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/heroHome.png';
import circle from '../../assets/Ellipse17.png';
import styled from 'styled-components';
import Button from '../common/Button';
function Card1() {
	return (
		<Card>
			<Card1Content>
				<OppImportance>
					<div className ="circular">
						{/* <img src={circle} alt="circular" /> */}
					</div>
				</OppImportance>

				<Importance>
					<ImportanceHead>Why Choose Life is important</ImportanceHead>
					<ImportanceText>
              Younger and older people are coming down with serious non
              communicable diseases like Hypertension, Diabetes, Obesity and
              Cancer due to personal and workplace related reasons.
					</ImportanceText>
					<Link style={priLink} className="hover-link" to="../pages/About.js">
              Read up more
					</Link>
					<br />
					<ImportanceBtns>
						<Button value="Get started" theme="green">
							{' '}
                Get started
						</Button>
					</ImportanceBtns>
				</Importance>
			</Card1Content>
		</Card>

	);
}

const Card = styled.section`
background-image: url(${img});
width: 70%;
margin:auto;
.circular{
  background-image: url(${circle});

}
.hover-link:hover{
  color: #1d1d1d !important;
  transition: .2s;
 }

`;
const Importance = styled.div`
  width: 39.0rem;
`;
const ImportanceHead = styled.h3`
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 2.9rem;
  margin-bottom: 2.04rem;
  color: 1d1d1d;
`;
const ImportanceBtns = styled.div`
  margin-top: 2rem;
`;

/* const wholeVideo = {
	background: '#EBF8F7',
	// padding: "82px 183px",
	height: 419.4,
	marginTop: '-30px',
	zIndex: 5,
}; */

const Card1Content = styled.div`
  width: 70%;
  align-items: center;
  height: 25.6rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const OppImportance =  styled.div`
  justify-content: center;
  display: flex;
 `
;
const priLink = {
	fontWeight: 600,
	fontSize: "1.4rem",
	lineHeight: '132%',
	textDecorationLine: 'underline',
	marginBottom: "2rem",
	color: '#3CBDB2',
};


const ImportanceText = styled.p`
  color: #606161;
  font-size: 1.4rem;
  line-height: 2.2rem;
  margin-bottom: .66rem;
`;


export default Card1;
