// modules
import React from 'react';
import styled from 'styled-components';
import Bg1 from '../../assets/Hero.svg';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import { subscribeToEmail } from '../../store/actions/subscriptionActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	/* Subscribe styling goes here */
	height:47.5rem;
	position: relative;
	overflow:hidden;
	.bg-flower {
		position: absolute;
		left: 3rem;
    bottom: 3.5rem;
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
	transform: translate(-50%, -50%);
	text-align: center;
}

.importanceText {
	color: #606161;
	font-size: 1.4rem;
	line-height: 2.2rem;
	margin-bottom: 2.45rem;
}
.subscribeInputs{
	margin-bottom: 3rem;
}
.subscribeInputs{
	input{
		background: #EEEDED;
		border-radius: 5px;
		padding: 1rem 1.5rem;
		border:none;
		height: 4.8rem;
		outline: none;
		&::placeholder {
			color: rgba(96, 97, 97, 0.5);
			font-size: 1.4rem;
			font-family:"Matteo";
			line-height: 2.4rem;
			}
		}
		[type=text] {
			width: 234px;
			margin-right: 1.1rem;
		}
		[type=email] {
			width: 378px;
			max-width:100%;
		}
}
.centered>div	{
	display: flex;
  justify-content: center;
}
`;

const Subscribe = ({subscribeToEmail}) => {
	const [email, setEmail] = React.useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		subscribeToEmail({email});
	};

	return (
		<Wrapper>
			<div className="card1Content" style={{ zIndex: 2 }}>
				<div className="">
					<h3 className="importanceHead" style={{ marginBottom: '2.04rem' }}>
            Interested in Keeping up with Choose Life?
					</h3>
					<p className="importanceText">Subscribe to our newsletter!</p>
					<div className="subscribeInputs">
						<input
							type="email"
							id="email"
							placeholder="Email Address"
							name="email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
						/>
					</div>
					<Link className='centered' to="/onboarding/individual">
						<Button
							value="Get started"
							theme="yellow"
							onClick={onSubmit}
						>
              Get started
						</Button>
					</Link>
				</div>
			</div>

			<img className="bg-flower" src={Bg1} alt="hiddenImg1" />
		</Wrapper>
	);
};

Subscribe.propTypes = {
	//TODO: Subscribe prop types goes here
	subscribeToEmail: PropTypes.func.isRequired
};


export default connect(null, {subscribeToEmail})(Subscribe);