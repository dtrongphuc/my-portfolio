import React from 'react';
import styled from 'styled-components';

import theme from '../../constaints/theme';
import { data } from '../../store/data';
import { ButtonLink } from '../../styled.global';

const Wrapper = styled.div`
	position: relative;
	margin-top: 2rem;
	padding-left: 1.4rem;
`;

const Item = styled.li`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	padding: 1rem 0;
	border-bottom: 1px solid #eaeaea;
	word-wrap: break-word;

	&:last-child {
		border-bottom: none;
	}
`;

const Bold = styled.p`
	color: ${theme.body};
	font-weight: 600;
	font-size: 1rem;
	text-transform: capitalize;
	margin-right: 8px;
`;

const MailLink = styled.a.attrs(({ email }) => ({
	href: `mailto:${email}`,
}))`
	color: ${theme.primary};
	font-size: 1rem;
	line-height: 1.2;
	text-decoration: none;
`;

const Text = styled.p`
	color: ${({ primary }) => (primary && theme.primary) || theme.body};
	font-size: 1rem;
	line-height: 1.2;
`;

const Button = styled(ButtonLink)`
	margin-top: 1rem;
	transition: all 0.2s linear;
	&:hover {
		box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.15);
		background-color: #1baa80;
		border-color: #1baa80;
	}
`;

function Info() {
	return (
		<Wrapper>
			<ul>
				{Object.entries(data.info).map(([key, value]) => (
					<Item key={key}>
						<Bold>{key}:</Bold>
						{(key === 'email' && (
							<MailLink email={value}>{value}</MailLink>
						)) || <Text primary={key === 'email'}>{value}</Text>}
					</Item>
				))}
			</ul>
			<Button>Download CV</Button>
		</Wrapper>
	);
}

export default Info;
