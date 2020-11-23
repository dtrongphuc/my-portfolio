import React from 'react';
import styled from 'styled-components';

import theme from '../../constaints/theme';

const Wrapper = styled.div`
	position: relative;
`;

const Title = styled.p`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: ${theme.dark};
	font-size: 2.25rem;
	font-weight: 600;
	line-height: 2.25rem;
	text-transform: capitalize;
	text-align: center;

	&:after {
		content: '';
		display: inline-block;
		position: absolute;
		bottom: -1rem;
		left: 50%;
		transform: translateX(-50%);
		width: 80px;
		height: 3px;
		background-color: ${theme.primary};
	}
`;

const Fuzzy = styled.p`
	width: 100%;
	font-size: calc(1.4rem + 8.2vw);
	color: rgba(240, 240, 240, 0.9);
	font-weight: 600;
	line-height: 1.3;
	text-transform: uppercase;
	text-align: center;
	z-index: -1;
`;

function SectionTitle({ children, fuzzy }) {
	return (
		<Wrapper>
			<Fuzzy>{fuzzy}</Fuzzy>
			<Title>{children}</Title>
		</Wrapper>
	);
}

export default SectionTitle;
