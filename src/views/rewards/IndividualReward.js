import React from 'react';
// import PropTypes from 'prop-types';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import WelcomeCard from '../../components/dashboard/dashboard_home/WelcomeBanner';
import styled from 'styled-components';
import CopyClipboard from '../../components/dashboard/CopyClipboard';

const Wrapper = styled.div`
  .pink {
    background: rgba(243, 121, 32, 0.05);
    border: 1px solid ${(props) => props.theme.color.ui_08};
    padding: 4rem;
    h1 {
      font-size: 1.6rem;
      line-height: 1.5rem;
      letter-spacing: 0.2px;
      color: ${(props) => props.theme.color.ui_05};
      @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
        text-align: center;
      }
    }
  }
  .clipboard {
    background: ${(props) => props.theme.color.ui_01};
    padding: 2rem;
  }
`;

function IndividualReward() {
	return (
		<Wrapper>
			<DashboardLayout whatPage="Rewards">
				<WelcomeCard
					emoji="Reward"
					heading="🎉"
					detail="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				/>
				<div className="pink">
					<h1>Your unique referral link</h1>
				</div>
				<div className="clipboard">
					<CopyClipboard />
				</div>
			</DashboardLayout>
		</Wrapper>
	);
}

IndividualReward.propTypes = {};

export default IndividualReward;
