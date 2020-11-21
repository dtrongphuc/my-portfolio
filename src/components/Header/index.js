import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

import Social from '../Socical';
import Navigation from '../Navigation';
import theme from '../../constaints/theme';
import { data } from '../../store/data';

const HeaderWrapper = styled.header`
	position: sticky;
	display: flex;
	align-items: center;
	justify-content: space-between;
	top: 0;
	width: 100%;
	height: ${theme.headerHeight};
	padding: 2px 1rem;
	background-color: ${theme.dark};
	visibility: visible;
	z-index: 100;

	.fade-enter {
		opacity: 0.1;
	}

	.fade-enter-active {
		opacity: 1;
		transition: all 300ms ease-in;
	}

	.fade-exit {
		opacity: 1;
		visibility: visible;
	}

	.fade-exit-active {
		opacity: 0;
		transition: all 300ms ease-in;
		visibility: hidden;
	}

	@media (min-width: 992px) {
		visibility: hidden;
		display: none;
	}
`;

const Left = styled.p`
	color: ${theme.white};
	font-size: 1.2rem;
	font-weight: 500;
	text-transform: capitalize;
`;

const Right = styled.div`
	display: flex;
	align-items: center;
`;

const BarsButton = styled.div`
	margin-left: 1rem;
	width: 1rem;
	cursor: pointer;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
`;

const NavWrapper = styled.nav`
	display: block;
	position: absolute;
	top: ${theme.headerHeight};
	left: 0;
	right: 0;
	padding: 1rem;
	text-align: left;
	background-color: rgba(0, 0, 0, 0.95);
`;

function Header() {
	const [barsOpen, setBarsOpen] = useState(false);
	const nodeRef = useRef(null);

	return (
		<HeaderWrapper>
			<Left>{data?.name}</Left>
			<Right>
				<Social tooltipPos='bottom' />
				<BarsButton>
					<FontAwesomeIcon
						icon={faBars}
						color={theme.white}
						size='lg'
						style={{
							display: barsOpen ? 'none' : 'inline-block',
						}}
						onClick={() => setBarsOpen(true)}
					/>
					<FontAwesomeIcon
						icon={faTimes}
						color={theme.white}
						style={{
							display: barsOpen ? 'inline-block' : 'none',
						}}
						size='lg'
						onClick={() => setBarsOpen(false)}
					/>
				</BarsButton>
			</Right>
			<CSSTransition
				in={barsOpen}
				nodeRef={nodeRef}
				key={'nav-mobile'}
				timeout={{ enter: 300, exit: 300 }}
				classNames='fade'
				unmountOnExit
			>
				<NavWrapper ref={nodeRef}>
					<Navigation seperate={true} />
				</NavWrapper>
			</CSSTransition>
		</HeaderWrapper>
	);
}

export default Header;
