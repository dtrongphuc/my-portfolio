import React from 'react';
import styled from 'styled-components';

import theme from '../../constaints/theme';
import { data } from '../../store/data';

const Wrapper = styled.div`
	position: relative;
	margin-top: 2rem;
	@media (max-width: 991px) {
		text-align: center;
	}
`;

const Bold = styled.p`
	font-size: 1.8rem;
	color: ${theme.title};
	font-weight: 600;
	line-height: 1.4;

	.about-name {
		color: ${theme.primary};
		text-transform: capitalize;
	}
`;

const Text = styled.p`
	margin-top: 1rem;
	font-size: 1rem;
	color: ${theme.body};
	line-height: 1.8;
`;

function Intro() {
	return (
		<Wrapper>
			<Bold>
				I'm <span className='about-name'>{data.name}</span>, a Web
				Developer
			</Bold>
			{data.intro.map((text, i) => (
				<Text key={i}>{text}</Text>
			))}
		</Wrapper>
	);
}

export default Intro;
