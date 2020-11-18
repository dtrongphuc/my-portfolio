import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';

import theme from '../../constaints/theme';
import { data } from '../../store/data';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;

const SocicalItem = styled.a`
	position: relative;
	margin: 0 0.8rem;
	font-size: 0.9rem;
	color: ${theme.white};
	opacity: 1;
	text-decoration: none;
	cursor: pointer;
	user-select: none;

	&:hover {
		color: ${({ color }) =>
			(!!color && color) || 'rgba(255, 255, 255, 0.5)'};
	}

	&:hover > .tooltip {
		display: block;
	}
`;

const IconToolTip = styled.span`
	display: none;
	position: absolute;
	background-color: rgba(0, 0, 0, 0.8);
	font-size: 0.8rem;
	height: 1.4rem;
	width: fit-content;
	padding: 0 8px;
	line-height: 1.4rem;
	top: -34px;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 4px;
	color: ${theme.white};

	&::before {
		content: '';
		display: block;
		position: absolute;
		bottom: -6px;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 0;
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;

		border-top: 6px solid rgba(0, 0, 0, 0.8);

		color: ${theme.white};
	}
`;

function Socical() {
	return (
		<Container>
			<SocicalItem color='#1877F2' href={data?.facebook} target='_blank'>
				<IconToolTip className='tooltip'>Facebook</IconToolTip>
				<FontAwesomeIcon icon={faFacebookF} />
			</SocicalItem>
			<SocicalItem href={data?.github} target='_blank'>
				<IconToolTip className='tooltip'>Github</IconToolTip>
				<FontAwesomeIcon icon={faGithub} />
			</SocicalItem>
		</Container>
	);
}

export default Socical;
