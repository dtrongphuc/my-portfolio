import React from 'react';
import styled from 'styled-components';

import theme from '../../constaints/theme';
import Profile from './Profile';
import NavItem from './NavItem';
import Socical from './Socical';

const Container = styled.nav`
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	height: 100%;
	width: 260px;
	background-color: ${theme.sidebarBg};
`;

const NavList = styled.div`
	margin-top: 40px;
`;

const Footer = styled.div`
	position: absolute;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
`;

function Sidebar() {
	return (
		<Container>
			<Profile />
			<NavList>
				<NavItem href='home' content='Home' />
				<NavItem href='about' content='About Me' />
				<NavItem href='services' content='What I Do' />
				<NavItem href='resume' content='Resume' />
				<NavItem href='portfolio' content='Portfolio' />
				<NavItem href='contact' content='Contact' />
			</NavList>
			<Footer>
				<Socical />
			</Footer>
		</Container>
	);
}

export default Sidebar;
