import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Disclaimer from '../../../assets/Disclaimer.svg';
import WelcomeBanner from '../../../components/dashboard/dashboard_home/WelcomeBanner';
import DashboardLayout from '../../../components/layouts/dashboardLayout/DashboardLayout';

const Wrapper = styled(Paper)`
	.heading {
		font-weight: bold;
		font-size: 2.4rem;
		line-height: 2.4rem;
		letter-spacing: -0.2px;
		color: ${(props) => props.theme.color.ui_05};
		padding: 2rem 0 4rem 0;
	}
	.withNull {
		display: grid;
		align-items: center;
		grid-template-columns: max-content 1fr;
		padding-bottom: 4rem;
		#disclaimer {
			vertical-align: bottom;
			padding-right: 5px;
		}
		h1 {
			padding-right: 2rem;
			font-weight: normal;
			line-height: 1.5rem;
			letter-spacing: -0.2px;
			color: ${(props) => props.theme.color.ui_06};
		}
		.null {
			border: 1px solid rgba(214, 216, 211, 0.5);
			margin: 10px 0px;
			width: 95%;
			height: 1px;
		}
	}
	.text {
		p {
			font-weight: 300;
			line-height: 2.5rem;
			letter-spacing: 0.2px;
			color: ${(props) => props.theme.color.ui_05};
			padding-bottom: 2rem;
		}
	}
	.btn {
		padding: 3rem 0 5rem 0;
		.button {
			width: 100% !important;
		}
	}
`;
function index({ children, nullText }) {
	return (
		<Wrapper>
			<DashboardLayout whatPage="Meals">
				<p className="heading">Meals</p>
				<WelcomeBanner
					emoji="🍲"
					heading="Meal Plans"
					detail="A balanced diet is essential to a healthy life and meal planning is the easiest way to ensure you eat healthy."
				/>
				<div className="withNull">
					<h1>{nullText}</h1>
					<div className="null" />
				</div>
				{children}
				<div className="withNull">
					<h1>
						{' '}
						<span>
							<img
								src={Disclaimer}
								alt="Disclaimer"
								id="disclaimer"
							/>
						</span>
						Disclaimer
					</h1>
					<div className="null" />
				</div>
				<div className="text">
					<p>
						Any information is confidential to you and Choose Life.
						Choose Life does not share this information with your
						employer. This information is strictly to give you an
						assessment of where your health is, and we use this
						information in recommending active lifestyle choices.
					</p>
				</div>
			</DashboardLayout>
		</Wrapper>
	);
}

index.propTypes = {
	children: PropTypes.any.isRequired,
	nullText: PropTypes.string.isRequired,
};

export default index;
