import React from 'react';
import styled from 'styled-components' ;

const Wrapper = styled.div `
  height: max-content;
	flex-wrap: wrap;
	max-width: 1058px;
	margin: auto;
	margin: 5.4rem auto 12.4rem auto;
	.wholeVideoContent {
		width: 100%;
		display: flex;
		flex-direction: row-reverse;
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
			font-size: '2.4rem';
			line-height: '2.9rem';
			margin-bottom: 2.04rem;
			color: '1d1d1d',
		}
		.videoTextP {
			color: '#606161';
			font-size: '1.4rem';
			line-height: '2.2rem';
			margin-bottom: .66rem;
		}
		.priLink {
			font-weight: 600;
			font-size: 1.4rem;
			line-height: '132%';
			text-decoration: 'underline';
			margin-bottom: 2rem;
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
					<h3 className="videoText">For everyone</h3>
					<p className='videoTextP'>
					We are a Wellness solutions provider empowering both individuals organizations with the data, tools, and guides, to improve their physical and mental wellbeing. Using innovative technology that gives intelligent verifiable analytics and progress reports on wellness performance, Choose Life is driving Wellness into corporate culture and individual lifestyles.</p>
					
				</div>
			</div>

		</Wrapper>
	);
}






export default Video;
