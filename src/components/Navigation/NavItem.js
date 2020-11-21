import React from 'react';
import styled from 'styled-components';

import theme from '../../constaints/theme';

const Link = styled.a`
	display: block;
	color: ${({ active }) => (active ? theme.primary : theme.white)};
	font-size: 1rem;
	padding: 0.9rem 0;
	border-bottom: ${({ seperate }) =>
		!!seperate && '1px solid rgba(250, 250, 250, 0.15)'};
	text-decoration: none;

	&:hover {
		color: ${theme.primary};
	}

	&:last-child {
		border-bottom: none !important;
	}
`;

function NavItem({ href, content, active, seperate }) {
	return (
		<Link href={'#' + href} active={active} seperate={seperate}>
			{content}
		</Link>
	);
}

export default NavItem;
