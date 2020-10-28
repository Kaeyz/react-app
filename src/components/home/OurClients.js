// modules
import React from 'react';
import styled from 'styled-components';
import leftImg from '../../assets/leftFlower.svg';
import rightImg from '../../assets/rightFlower.svg';
import firstBank from '../../assets/client2.svg';
import client2 from '../../assets/client1.svg';

const Wrapper = styled.div`
	background: #f8f9fb;
	height: 84.8rem;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	.leftImg {
		position: absolute;
		bottom: -10.2rem;
		left: -2.617rem;
	}
	.rightImg {
		position: absolute;
		top: 6.7rem;
		right: 0;
	}
	.clientContent {
		text-align: center;
		flex-direction: column;
		max-width: 100%;
	}
	.clientHead {
		width: 70.4rem;
		max-width:100%
	}
	.clientHead > h1 {
		font-size: 3.2rem;
		line-height: 3.8rem;
		color: #1d1d1d;
		margin-bottom: 2rem;
	}
	.clientHead > p {
		font-weight: normal;
		font-size: 1.4rem;
		line-height: 2.4rem;
		color: #606161;
	}

	/*
	CSS for tabset
 */
	.tabset > input[type="radio"] {
	 position: absolute;
	 left: -200vw;
 }

 	.tabset .tab-panel {
	 display: none;
 }

 .tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),
 .tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),
 .tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),
 .tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),
 .tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {
	 display: block
 }
 .tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child{
	justify-content: center;
	display:flex;
	 align-items: center;
 }

 /*
	Styling
 */

 .tabset > label {
		position: relative;
		display: inline-block;
		padding: 1rem 1.5rem;
		font-size: 1.4rem;
		line-height: 2.4rem;
		border-bottom: 0;
		cursor: pointer;
		font-weight: 600;
		position:relative;
		width:20rem
 }

 .tabset > label::after {
		content: "";
		position: absolute;
		right: 0px;
		bottom: 0px;
		width: 100%;
		height: .2rem;
		background: #8d8d8d;
 }

 .tabset > label:hover,
 .tabset > input:focus + label {
	color: #2EC4B6;
	transition:.3s
}

 .tabset > label:hover::after,
 .tabset > input:focus + label::after,
 .tabset > input:checked + label::after {
	 background:  #2EC4B6;
	 transition:.3s
 }

 .tabset > input:checked + label {
		color: #2EC4B6;
		margin-bottom: -.1rem;
 }

 .flexy-client{
	 width:100%;
	 justify-content: space-around;
	 flex-wrap: wrap;
 }
 .tab-panel {
	//  padding: 3rem 0;
		background: rgba(46,196,182,.05);
		width: 105.8rem;
		height: 48rem;
		max-width:100%;
		display: flex;
		flex-direction:column;
 }

 .tabset {
	width: 105.8rem;
	 max-width: 100%;
	 margin-top:4.7rem
 }

 #rauchbier{
	 text-align:center;
	 padding: 2rem;
	 p{
		 color:red
	 }
 }
}
`;

export default function OurClients() {
	const [tab, setTab] = React.useState('');

	const handleChange = (event) => {
		setTab(event.target.value);
	};
	return (
		<Wrapper>
			{/* clients component goes here */}

			<img className="leftImg" src={leftImg} alt="leftImg" />
			<img className="rightImg" src={rightImg} alt="leftImg" />
			<div className="clientContent flex">
				<div className="clientHead">
					<h1>Who we’ve served</h1>
					<p>
						Companies of every size have made Choose Life their go-to provider
						on Wellness. We believe in our mission and we are geared to help you
						achieve more.
					</p>
				</div>

				<div className="tabset">
					{/* <!-- Tab 1 --> */}
					<input
						type="radio"
						name="tabset"
						id="tab1"
						aria-controls="marzen"
						checked
						value={tab}
						onChange={handleChange}
					/>
					<label htmlFor="tab1" style={{ marginRight: '2rem' }}>
						OUR CLIENTS
					</label>
					{/* <!-- Tab 2 --> */}
					<input
						type="radio"
						name="tabset"
						id="tab2"
						aria-controls="rauchbier"
					/>
					<label htmlFor="tab2">RESULTS</label>

					<div className="tab-panels">
						<section id="marzen" className="tab-panel flex">
							<div
								className="flex flexy-client"
								style={{ marginBottom: '10rem' }}
							>
								<img src={firstBank} alt="firstbank" />
								<img src={client2} alt="firstbank" />
								<img src={firstBank} alt="firstbank" />
								<img src={client2} alt="firstbank" />
							</div>
							<div className="flex flexy-client">
								<img src={firstBank} alt="firstbank" />
								<img src={client2} alt="firstbank" />
								<img src={firstBank} alt="firstbank" />
								<img src={client2} alt="firstbank" />
							</div>
						</section>
						<section id="rauchbier" className="tab-panel">
							<p>
								<strong>Overall Impression:</strong> An elegant, malty German
								amber lager with a balanced, complementary beechwood smoke
								character. Toasty-rich malt in aroma and flavor, restrained
								bitterness, low to high smoke flavor, clean fermentation
								profile, and an attenuated finish are characteristic.
							</p>
						</section>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

OurClients.propTypes = {
	//TODO: clients prop types goes here
};
