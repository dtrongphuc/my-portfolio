import React from 'react';
import { MoonLoader } from 'react-spinners';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
	position: relative;
	background-color: #fff;
	height: 100vh;
	width: 100%;
`;

const Center = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
`;

const LoaderStyle = css`
	display: block;
`;

function Loader() {
	return (
		<Wrapper className='loading-wrapper'>
			<Center>
				<MoonLoader
					loading={true}
					size={40}
					css={LoaderStyle}
					color='#191919'
				/>
			</Center>
		</Wrapper>
	);
}

export default Loader;
