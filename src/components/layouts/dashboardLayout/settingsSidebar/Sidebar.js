import React from 'react';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import SettingsNavSection from '../../../../components/dashboard/settings/SettingsNavSection';
import Divider from '@material-ui/core/Divider';
import { device } from '../../../../Device';

const Wrapper = styled.div`
  .text {
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${(props) => props.theme.color.ui_05};
  }
  .heading {
    color: ${(props) => props.theme.color.ui_05};
    h1 {
      font-weight: bold;
      font-size: 24px;
      line-height: 24px;
      margin: 1rem 0 1.6rem 0;
    }
  }
  .settings-body {
    margin-top: 4rem;
    padding: 4.2rem;
    .settings-body-content {
      ${device.tablet`
		display: block;
	  `}
      .gen-info {
        ${device.tablet`
		max-width: 100%;
	  `}
      }
    }
    .submit > div {
      margin-top: 4rem;
    }
    .gridy {
      display: grid;
      grid-template-columns: 1fr 100%;
      grid-gap: 4rem;
      ${device.tablet`
	display: block;
	`}
      .divider {
        ${device.tablet`
    display: none;
  `}
      }
    }
  }
`;

const Sidebar = ({ children }) => {
	const tabsItems = [
		{ icon: 'account', text: 'Account', link: '/settings/account' },
		{ icon: 'password', text: 'Password', link: '/settings/password' },
		{ icon: 'help', text: 'Help', link: '/settings/help' },
	];
	return (
		<DashboardLayout>
			<Wrapper>
				<div className="heading">
					<h1>Settings</h1>
					<p className="text">Change your profile and account settings</p>
				</div>
				<Paper className="settings-body">
					<Grid className="settings-body-content" container spacing={3}>
						<Grid item sm={3}>
							<SettingsNavSection title="TABS" items={tabsItems} />
						</Grid>
						<Grid item className="gen-info" sm={8}>
							<div className="gridy">
								<Divider orientation="vertical" className="divider" flexItem />

								<div>{children}</div>
							</div>
						</Grid>
					</Grid>
				</Paper>
			</Wrapper>
		</DashboardLayout>
	);
};
Sidebar.propTypes = {
	children: PropTypes.any.isRequired,
};

export default Sidebar;
