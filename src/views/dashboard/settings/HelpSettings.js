import React from 'react';
import SideBar from '../../../components/layouts/dashboardLayout/settingsSidebar/Sidebar';

import styled from 'styled-components';
const Wrapper = styled.div`
.settings-body-main{
    p{
        padding-bottom: 1.3px
    }
}
`;

const HelpSettings = () => {

	return (
		<SideBar>
			<Wrapper>
				<div className="settings-body-main">
					<h1 className='text'>General Information</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
				</div>
				<p>Help</p>
			</Wrapper>

		</SideBar>
	);
};

export default HelpSettings;
