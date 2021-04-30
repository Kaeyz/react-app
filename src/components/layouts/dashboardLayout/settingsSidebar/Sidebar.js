import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import SettingsNavSection from '../../../../components/dashboard/settings/SettingsNavSection';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';

const Wrapper = styled.div`
	.text {
		line-height: 1.6rem;
		color: ${(props) => props.theme.color.ui_05};
	}
	.heading {
		color: ${(props) => props.theme.color.ui_05};
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			display: none;
		}
	}
	h1 {
		font-weight: bold;
		margin: 1rem 0 1.6rem 0;
	}
	.settings-body {
		margin-top: 4rem;
		padding: 4.2rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			background-color: ${(props) => props.theme.color.ui_09};
			box-shadow: 0px 0px 0px;
			padding: 0;
			margin-top: 2rem;
		}
	}
	.settings-body-content {
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			display: block;
		}
		.tabs-items {
			max-width: 100%;
		}
	}
	.gen-info {
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			max-width: 100%;
		}
	}
	.submit > div {
		margin-top: 4rem;
	}
	.gridy {
		display: grid;
		grid-template-columns: 1fr 100%;
		grid-gap: 4rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			display: block;
		}
	}
	.divider {
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			display: none;
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
		<DashboardLayout whatPage="Settings">
			<Wrapper>
				<div className="heading">
					<h1>Settings</h1>
					<p className="text">
						Change your profile and account settings
					</p>
				</div>
				<Paper className="settings-body">
					<Grid
						className="settings-body-content"
						container
						spacing={3}
					>
						<Grid item sm={3} xs={12} className="tabs-items">
							<SettingsNavSection
								title="TABS"
								items={tabsItems}
							/>
						</Grid>
						<Grid item className="gen-info" sm={8} xs={12}>
							<div className="gridy">
								<Divider
									orientation="vertical"
									className="divider"
									flexItem
								/>

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
