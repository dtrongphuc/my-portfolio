import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const down = keyframes`
    0% {
        bottom: 2.2rem;
        opactiy: 0;
    }

    80% {
        bottom: -1.4rem;
        opacity: 0.5;
    }
    
    100% {
        bottom: -1.6rem;
        opacity: 1;
    }
`;

const Wrapper = styled.div`
	vertical-align: top;
	.chevronDown {
		font-size: 1.6rem;
		height: 120px;
		cursor: pointer;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		animation: ${down} 1.2s infinite;
	}
`;

function ChevronDown() {
	return (
		<Wrapper>
			<FontAwesomeIcon
				icon={faChevronDown}
				color='#fff'
				className='chevronDown'
			/>
		</Wrapper>
	);
}

export default ChevronDown;
