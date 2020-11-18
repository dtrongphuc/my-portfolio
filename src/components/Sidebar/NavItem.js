import React from 'react';
import styled from 'styled-components';

import theme from '../../constaints/theme';

const Link = styled.a`
	display: block;
	color: ${theme.white};
	font-size: 1rem;
	padding: 0.9rem 0;
	text-decoration: none;
	text-align: center;

	&:hover {
		color: ${theme.primary};
	}
`;

function NavItem({ href, content }) {
	return <Link href={'#' + href}>{content}</Link>;
}

export default NavItem;
