import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from '../../layouts/GridSystem';
import theme from '../../constaints/theme';
import { data } from '../../store/data';

const Wrapper = styled.div`
	position: relative;
	margin-top: 2.4rem;
`;

const Frames = styled.div`
	--bd: 1px dotted #e0dede;

	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 1rem;
	text-align: center;

	/* @media (max-width: 767.999px) {
		${Container} ${Row} ${Col}:first-child > & {
			border-bottom: var(--bd);
			border-right: var(--bd);
		}

		${Container} ${Row} ${Col}:last-child > & {
			border-top: var(--bd);
			border-left: var(--bd);
		}
	}

	@media (min-width: 768px) {
		border-right: var(--bd);
		${Container} ${Row} ${Col}:last-child > & {
			border-right: none;
		}
	} */

	&:before {
		content: '';
		display: block;
		position: absolute;
		width: 1px;
		height: 100%;
		top: 0;
		left: -1px;
		border-left: var(--bd);
	}

	&:after {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		height: 1px;
		bottom: -1px;
		left: 0;
		border-bottom: var(--bd);
	}

	${Container} ${Row} ${Col}:first-child > &:before {
		border-left: none;
	}

	@media (min-width: 768px) {
		&:after {
			display: none;
		}
	}

	@media (max-width: 767.999px) {
		${Container} ${Row} ${Col}:nth-child(3) > &:before,
        ${Container} ${Row} ${Col}:nth-child(3) > &:after,
        ${Container} ${Row} ${Col}:nth-child(4) > &:after {
			display: none;
		}
	}
`;

const Number = styled.p`
	color: #6c757d;
	font-size: 3.4rem;
	line-height: 1.4;
	font-weight: 500;
`;

const Text = styled.p`
	font-size: 1rem;
	color: ${theme.body};
	text-transform: capitalize;
	line-height: 1.2;
`;

function Statistics() {
	return (
		<Wrapper>
			<Container>
				<Row>
					{data.statistics.map((item) => (
						<Col
							md={3}
							all={6}
							allOffset='0'
							key={item.name.split(' ').join('')}
						>
							<Frames>
								<Number>{item.number}</Number>
								<Text>{item.name}</Text>
							</Frames>
						</Col>
					))}
				</Row>
			</Container>
		</Wrapper>
	);
}

export default Statistics;
