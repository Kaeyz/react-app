import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components' ;
import Button from '../common/Button';

const Wrapper = styled.div `
  height: max-content;
	flex-wrap: wrap;
	.wholeVideoContent {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}
	.videoDetails {
		max-width: 48%;
	}
	.iframe {
		height: '100%';
		min-width: 48%;
		width: '100%';
	}
	@media screen and (max-width: ${props => props.theme.breakpoint.md}) {
		.iframe {
			height: '100%';
			min-width: 80%;
			width: '100%';
		}
		.videoDetails {
			max-width: 80%;
			}
		}
		.videoText {
			font-weight: 'bold';
			font-size: '24px';
			line-height: '29px';
			margin-bottom: 20.4;
			color: '1d1d1d',
		}
		.videoTextP {
			color: '#606161';
			font-size: '14px';
			line-height: '22px';
			margin-bottom: 6.6;
		}
		.priLink {
			font-weight: 600;
			font-size: 14;
			line-height: '132%';
			text-decoration: 'underline';
			margin-bottom: 20;
			color: ${ props=> props.theme.color.brand_02};
		}
`;


function Video() {
	return (
		<Wrapper>

			<div className="wholeVideoContent" >
				<div className="iframe">
					<iframe
						src="https://www.youtube.com/embed/E7wJTI-1dvQ"
						frameBorder="0"
						allow="autoplay; encrypted-media"
						width="100%" height="256px"
						allowFullScreen
						title="video"
					/>

				</div>

				<div className="videoDetails">
					<h3 className="videoText">Choosing Wellness</h3>
					<p className='videoTextP'>
            Wellness is a circle. A circle designed to help you achieve
            wholesome balance for you mind, body & soul. We take a scientific
            look at the factors driving stress & strain in your workplace and in your private life and we help you find a way out.
					</p>
					<Link className="priLink hover-link" to="/about">
							Read up more
					</Link>

					<div className="buttons">
						<Button value="As a Company" theme="darkGreen"> As a Company
						</Button>
						<Button value="As a person" theme="yellow">As a person</Button>
					</div>
				</div>
			</div>

		</Wrapper>
	);
}






export default Video;
