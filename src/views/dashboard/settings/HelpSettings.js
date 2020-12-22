import React from 'react';
import SideBar from '../../../components/layouts/dashboardLayout/settingsSidebar/Sidebar';
import styled from 'styled-components';


const Wrapper = styled.div`
.settings-body-main {
	@media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
		display:none;
	}
    p {
        padding-bottom: 1.3px
    }
}
.submit {
	.button {
		@media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
			width: 100% !important;
			}
		}
	}
`;

const HelpSettings = () => {

	return (
		<SideBar>
			<Wrapper>
				<div className="settings-body-main">
					<h1 className='text'>General Information</h1>
					<p>Coming Soon</p>
				</div>
			</Wrapper>

		</SideBar>
	);
};

export default HelpSettings;
