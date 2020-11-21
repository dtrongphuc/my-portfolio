import React from 'react';
import styled from 'styled-components';

import theme from '../../constaints/theme';
import Profile from './Profile';
import Navigation from '../Navigation';
import Socical from '../Socical';

const SidebarContainer = styled.nav`
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	height: 100%;
	width: 260px;
	background-color: ${theme.dark};
	visibility: hidden;
	z-index: 100;

	@media (min-width: 992px) {
		display: block;
		visibility: visible;
	}
`;

const NavWrapper = styled.nav`
	margin-top: 40px;
	text-align: center;
`;

const Footer = styled.div`
	position: absolute;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
`;

function Sidebar() {
	return (
		<SidebarContainer>
			<Profile />
			<NavWrapper>
				<Navigation seperate={false} />
			</NavWrapper>
			<Footer>
				<Socical />
			</Footer>
		</SidebarContainer>
	);
}

export default Sidebar;
