// modules
import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import { Link } from 'react-router-dom';
import arrow from '../../assets/Arrow1.svg';
import img from '../../assets/charles-etoroma.svg';

const Wrapper = styled.div`
  /* leadership styling goes here */
  margin-bottom: 18.6rem;
  .flexy {
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    .leadInfo {
      flex-direction: column;
      align-items: end;
      height: 52.7rem;
      max-width: 100%;
      justify-content: space-between;
      .linkSpan1 {
        font-size: 4.1rem;
        line-height: 6.4rem;
        color: ${(props) => props.theme.color.text_01};
        text-decoration-line: underline;
        margin-right: 2.5rem;
      }
    }
  }
  .leaderBg {
    background-image: url(${img});
    width: 44.1rem;
    height: 52rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  h1 {
    width: 52.7rem;
    max-width: 100%;
    font-size: 7.2rem;
    line-height: 8.6rem;
    color: ${(props) => props.theme.color.text_01};
    margin-bottom: 2.9rem;
  }
  p {
    width: 44.1rem;
    height: 9.6rem;
    color: ${(props) => props.theme.color.text_02};
  }
`;

export default function Leadership() {
	return (
		<Wrapper>
			<Container>
				<div className="flexy flex">
					<div className="flex leadInfo">
						<div style={{ maxWidth: '100%' }}>
							<h1>For your mind, body & spirit</h1>
							<p>
                Your physical and mental wellbeing are important. Do what keeps
                you happier and living a more fulfilled life. Our goal is to
                keep you healthy within your comfort zone, be it at home or at
                the office. We will help you achieve more.
							</p>
						</div>
						<div>
							<Link to="../pages/About.js">
								<span className="linkSpan1">Our Leadership</span>
								<span>
									<img src={arrow} alt="arrow" className="arrow" />
								</span>
							</Link>
						</div>
					</div>
					<div className="leaderBg"></div>
				</div>
			</Container>
		</Wrapper>
	);
}

Leadership.propTypes = {
	//TODO: leadership prop types goes here
};
