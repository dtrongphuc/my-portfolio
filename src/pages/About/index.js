import React from 'react';

import SectionTitle from '../../components/SectionTitle';
import { Section } from '../../styled.global';
import { Container, Row, Col } from '../../layouts/GridSystem';
import Intro from './Intro';
import Info from './Info';
import Statistics from './Statistics';

function About() {
	return (
		<Section id='about'>
			<Container lg={48}>
				<SectionTitle fuzzy='about me'>Know me more</SectionTitle>
				<Row>
					<Col lg={8}>
						<Intro />
					</Col>
					<Col lg={4}>
						<Info />
					</Col>
					<Col sm={12}>
						<Statistics />
					</Col>
				</Row>
			</Container>
		</Section>
	);
}

export default About;
