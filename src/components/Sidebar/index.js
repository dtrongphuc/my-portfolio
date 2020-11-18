import React from 'react';
import theme from '../../constaints/theme';
import styled from 'styled-components';

import Profile from './Profile';

const SidebarContainer = styled.nav`
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	height: 100%;
	width: 260px;
	background-color: ${theme.sidebarBg};
`;

function Sidebar() {
	return (
		<SidebarContainer>
			<Profile />
		</SidebarContainer>
	);
}

export default Sidebar;
