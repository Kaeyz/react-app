// modules
import React from 'react';
import styled from 'styled-components';
import Container from '../../common/Container';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/Arrow1.svg';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    height: max-content;
  .flexy {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
	  padding: 6rem 0;
    height: max-content;
    }
    .leadInfo {
      flex-direction: column;
      align-items: end;
      flex-direction: column-reverse;
      max-width: 50%;
	    justify-content: space-between;
    }
    .linkSpan1 {
      font-size: 3.2vw;
      line-height: 6.4rem;
      color: ${(props) => props.theme.color.text_01};
      text-decoration-line: underline;
    }
    .leaderBg {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
    }
    .leaderBg_img {
      width: 60%;
      height: 60%;
    }
    h1 {
      max-width: 100%;
      font-size: 5vw;
      line-height: 86px;
      color: ${(props) => props.theme.color.text_01};
      margin-bottom: 2.5vw;
    }
    p {
      font-size: 1.4rem;
      line-height: 24px;
      text-transform: uppercase;
      color: ${(props) => props.theme.color.text_02};
     }
    .top_header {
      margin-bottom: 5vw;
    }
    .arrow {
      width: 5vw;
    }
`;

export default function DoYouKnow({data}) {
	return (
		<Wrapper>
			<Container>
				<div className="flexy">
					<div className="flex leadInfo">
						<div style={{ maxWidth: '100%' }}>
							<h1>Did you know?</h1>
							<p>{data.description}</p>
						</div>
						<div className="top_header">
							<Link to="/about">
								<span className="linkSpan1">See Fitness</span>
								<span>
									<img src={arrow} alt="arrow" className="arrow" />
								</span>
							</Link>
						</div>
					</div>
					<div className="leaderBg">
						<img src={data.img} className="leaderBg_img" alt="leaderBg_img"/>
					</div>
				</div>
			</Container>
		</Wrapper>
	);
}

DoYouKnow.propTypes = {
	data: PropTypes.object.isRequired,
};
