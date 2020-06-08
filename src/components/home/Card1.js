import React from 'react';
import hiddenImg from '../../assets/Ellipse31.png';
import circle from '../../assets/Ellipse17.png';
import styled from 'styled-components';
import Button from '../common/Button';

// import { Link } from "react-router-dom";
// import img from "../../assets/heroHome.png";

function Card1() {
	return (
		<Card className="flex">
			<Card1Content>
				<OppImportance>
					<div className="circular">
						<img src={circle} alt="circular" />
					</div>
				</OppImportance>

				<Importance>

					<ImportanceHead>We ask the meaningful questions</ImportanceHead>
					<ImportanceText>
            Are you stressed? Are you unhappy? How can we make your life or you
            more productive and satisfied? Are you living a life of balance and
            good adjustment? We ask the questions that help us make you happier,
            healthier, and simply, the best version of yourself.
					</ImportanceText>

					<ImportanceBtns>
						<Button value="Explore" theme="green" style={{marginTop:'19.6px'}}>
							{' '}
              Explore
						</Button>
					</ImportanceBtns>
				</Importance>

			</Card1Content>
			<div className="hidden">
				<img src={hiddenImg} alt="hiddenImg" />
			</div>
		</Card>
	);
}

const Card = styled.section`
	height: 419.4px;
	margin-top: 48.6px;
	z-index: 5;
	// justify-content: end !important;

  .circular {
    background-image: url(${circle});
  }
  .hover-link:hover {
    color: #1d1d1d !important;
    transition: 0.2s;
  }
  .hidden{
    position: absolute;
  }

`;
const Importance = styled.div`
  width: 390px;
`;
const ImportanceHead = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 20.4;
  color: 1d1d1d;
`;
const ImportanceBtns = styled.div`
  margin-top: 20px;
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
  // height: 256px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const OppImportance = styled.div`
  justify-content: center;
  display: flex;

`;

/* const priLink = {
	fontWeight: 600,
	fontSize: 14,
	lineHeight: '132%',
	textDecorationLine: 'underline',
	marginBottom: 20,
	color: '#3CBDB2',
}; */

const ImportanceText = styled.p`
  color: #606161;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 6.6;
`;

export default Card1;
