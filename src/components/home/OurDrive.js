// modules
import React from 'react';
import styled from 'styled-components';
import Bg1 from '../../assets/heroHome.png';
import Button from '../common/Button';


const Wrapper = styled.div`
	/* OurDrive styling goes here */
	height:47.5rem;
	position: relative;

	.bg-flower {
	opacity: 0.5;
	}
.importance{
	width: 39rem;
}
.importanceHead{
	font-weight: bold;
	font-size: 2.4rem;
	line-height: 2.9rem;
	margin-bottom: 2.04rem;
	color: 1d1d1d;
}
.card1Content{
	max-width: 100%;
	width: 62.3rem;

	position: absolute;
		top: 50%;
		left: 50%;
		margin-right: -50%;
		transform: translate(-50%, -50%) }
		text-align: center;

.importanceText {
	color: #606161;
	font-size: 1.4rem;
	line-height: 2.2rem;
	margin-bottom: 3.9rem;
}
`;

export default function OurDrive() {
	return (
		<Wrapper>
			<div className="card1Content" style={{ zIndex: 2 }}>
				<div className="impotance">
					<h3 className="importanceHead" style={{ marginBottom: '2.04rem' }}>
							Why we stand out{' '}
					</h3>
					<p className="importanceText">
							Through rigorous scientific methodology, we have distilled the
							information that matters most to you. We provide you with the most
							reliable information about yourself or your workplace while
							maintaining a strict confidentiality arrangement between all
							parties.
					</p>

					<Button value="Get started" theme="darkGreen">
              Get started
            </Button>
				</div>
			</div>

			<div
				className="hidden"
				style={{ zIndex: 1, width: '100%'}}
			>
				<img className="bg-flower" src={Bg1} alt="hiddenImg1" />
			</div>

		</Wrapper>
	);
}

OurDrive.propTypes = {
	//TODO: OurDrive prop types goes here
};
