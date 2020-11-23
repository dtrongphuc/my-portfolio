import React, { useEffect } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';

import theme from '../../constaints/theme';
import banner from '../../assets/images/banner.webp';
import { ButtonLink, Section } from '../../styled.global';
import ChevronDown from '../ChevronDown';
import { Container, Row, Col } from '../../layouts/GridSystem';
import './styles.css';

const BannerContainer = styled.div`
	position: relative;
	overflow: hidden;
`;

const Mask = styled.div`
	background-color: rgba(17, 20, 24, 0.7);
	position: absolute;
	top: 0;
	left: 0;
	min-height: 100%;
	min-width: 100%;
`;

const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	min-height: 100%;
	min-width: 100%;

	background-image: url(${banner});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top center;
	background-attachment: fixed;
	z-index: -1;
`;

const Content = styled(Section)`
	display: flex;
	min-width: 100%;
	min-height: 100vh;
`;

const Text = styled.p`
	font-size: 1.8em;
	font-weight: 500;
	line-height: 1.8rem;
	color: ${theme.white};
	text-align: center;
`;

const TextLight = styled.p`
	font-size: 1.4rem;
	color: ${theme.whiteLight};
	line-height: 1.4rem;
	text-align: center;
`;

const TypedWrap = styled.div`
	display: block;
	text-align: center;
	width: 100%;
	word-wrap: break-word;
	margin: 3rem 0;
`;

const TypedText = styled(Text)`
	font-size: 3rem;
	line-height: 3rem;
	font-weight: 600;
	display: inline;
	text-align: center;
`;

const ContentContainer = styled(Container)`
	position: relative;
	height: 100%;
	z-index: 99;
	margin: auto;
`;

const DivWrapper = styled.div`
	text-align: center;
	margin-top: 2rem;
`;

const BtnLinkHover = styled(ButtonLink)`
	&:hover {
		background-color: ${theme.primary};
		color: ${theme.white};
		transition: all 0.3s linear;
	}
`;

function Banner() {
	useEffect(() => {
		const typed = new Typed('#typed', {
			strings: [`I'm Duong Trong Phuc.`, `I'm a frontend developer.`],
			typeSpeed: 60,
			backSpeed: 60,
			startDelay: 120,
			backDelay: 1000,
			smartBackspace: true,
			loop: true,
			loopCount: Infinity,
			onComplete: () => {
				document
					.querySelector('.typed-cursor')
					.classList.add('typed-cursor--blink');
			},
		});
		return () => {
			typed.destroy();
		};
	});
	return (
		<BannerContainer>
			<Mask />
			<Background />
			<Content>
				<ContentContainer>
					<Row>
						<Col>
							<Text>Welcome</Text>
						</Col>
						<Col>
							<TypedWrap>
								<TypedText id='typed'></TypedText>
							</TypedWrap>
						</Col>
						<Col>
							<TextLight>
								based in TP.Ho Chi Minh, Viet Nam.
							</TextLight>
						</Col>
						<Col>
							<DivWrapper>
								<BtnLinkHover
									color={theme.primary}
									bgColor={'transparent'}
									bColor={theme.primary}
								>
									Hire Me
								</BtnLinkHover>
							</DivWrapper>
						</Col>
					</Row>
				</ContentContainer>
			</Content>
			<ChevronDown />
		</BannerContainer>
	);
}

export default Banner;
